import base64
from pathlib import Path
import sys
import unittest
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from backend.github_store import GitHubRepo
from backend.security import UserError


class Response:
    def __init__(self,status,data=None):self.status_code=status;self.data=data
    def json(self):return self.data


class Transport:
    def __init__(self):self.calls=[];self.head='parent';self.files={};self.blobs={};self.entries=[];self.race=False;self.status=None
    def request(self,method,url,**kwargs):
        self.calls.append((method,url,kwargs))
        path=url.split('/repos/test/repo')[1]
        if self.status:return Response(self.status,{})
        if method=='GET' and path=='':return Response(200,{'private':True})
        if method=='GET' and path.startswith('/git/ref/'):return Response(200,{'object':{'sha':self.head}})
        if method=='GET' and path.startswith('/git/commits/'):return Response(200,{'tree':{'sha':'tree-parent'}})
        if method=='GET' and path.startswith('/contents/'):
            name=path.split('/contents/')[1]
            if name not in self.files:return Response(404)
            return Response(200,{'type':'file','content':base64.b64encode(self.files[name]).decode(),'encoding':'base64'})
        if method=='POST' and path=='/git/blobs':
            sha='blob-'+str(len(self.blobs));self.blobs[sha]=base64.b64decode(kwargs['json']['content']);return Response(201,{'sha':sha})
        if method=='POST' and path=='/git/trees':
            self.entries=kwargs['json']['tree'];return Response(201,{'sha':'tree-new'})
        if method=='POST' and path=='/git/commits':
            if self.race:self.head='concurrent'
            return Response(201,{'sha':'commit-new'})
        if method=='PATCH' and path.startswith('/git/refs/'):
            if self.head!='parent':return Response(422)
            self.head='commit-new'
            for e in self.entries:
                if e['sha'] is None:self.files.pop(e['path'],None)
                else:self.files[e['path']]=self.blobs[e['sha']]
            return Response(200,{'object':{'sha':self.head}})
        raise AssertionError((method,path))


class GitHubAdapterTests(unittest.TestCase):
    def setUp(self):self.http=Transport();self.repo=GitHubRepo('test/repo','main','test-only',self.http)
    def test_atomic_tree_commit_preserves_binary_and_json(self):
        result=self.repo.commit({'data/cms.json':b'{"ok":true}','assets/test.webp':b'\x00\xffimage'},'parent','CMS test')
        self.assertEqual(result,'commit-new');self.assertEqual(self.repo.read('assets/test.webp'),b'\x00\xffimage')
        patches=[kw for method,_,kw in self.http.calls if method=='PATCH']
        self.assertFalse(patches[0]['json']['force'])
        self.assertTrue(all(kw['allow_redirects'] is False for _,_,kw in self.http.calls))
    def test_reference_race_does_not_publish_partial_files(self):
        self.http.race=True
        with self.assertRaises(UserError):self.repo.commit({'data/cms.json':b'new'},'parent','CMS test')
        self.assertNotIn('data/cms.json',self.http.files)
    def test_wrong_expected_head_prevents_blob_writes(self):
        with self.assertRaises(UserError):self.repo.commit({'data/cms.json':b'new'},'old','CMS test')
        self.assertFalse(self.http.blobs)
    def test_token_errors_and_redirects_do_not_expose_credentials(self):
        for status in [301,401,403,429,500]:
            self.http.status=status
            with self.subTest(status=status),self.assertRaises(UserError) as cm:self.repo.head()
            self.assertNotIn('test-only',str(cm.exception))
    def test_private_metadata_and_missing_file(self):
        self.assertTrue(self.repo.private());self.assertIsNone(self.repo.read('questions/missing.json'))


if __name__=='__main__':unittest.main(verbosity=2)
