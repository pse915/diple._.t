import copy
import json
from pathlib import Path
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from catalog import ROOT, load_payload, validate_apps, web_url, local_image


class CatalogTests(unittest.TestCase):
    def setUp(self):
        self.example = json.loads((ROOT / "data/apps.json").read_text(encoding="utf-8"))[0]

    def test_real_payload(self):
        p = load_payload()
        self.assertEqual(len(p["apps"]), 6)
        self.assertFalse(p["warnings"])
        self.assertFalse(p["giscus"]["enabled"])
        self.assertTrue(all(a["thumbnail"].startswith("data:image/svg+xml;base64,") for a in p["apps"]))

    def test_duplicate_or_invalid_id_and_missing_title(self):
        invalid = [self.example, self.example, {**self.example, "id": "../escape"}, {"id": "missing-title"}, None]
        apps, warnings = validate_apps(invalid)
        self.assertEqual(len(apps), 1)
        self.assertEqual(len(warnings), 4)

    def test_optional_values_and_bad_date(self):
        apps, warnings = validate_apps([{"id": "minimal", "title": "최소 앱", "updatedAt": "2026-99-99", "tags": 17}])
        self.assertEqual(apps[0]["tags"], [])
        self.assertEqual(apps[0]["appUrl"], "")
        self.assertEqual(apps[0]["category"], "기타")
        self.assertEqual(apps[0]["updatedAt"], "")
        self.assertEqual(len(warnings), 1)

    def test_url_protocol_and_credentials(self):
        for bad in ["javascript:alert(1)", "data:text/html,hi", "https://user:pass@example.com", "https://example.com\n", "//example.com", None]:
            self.assertEqual(web_url(bad), "")
        self.assertEqual(web_url("https://example.com/demo"), "https://example.com/demo")

    def test_asset_boundary_and_missing_file(self):
        self.assertEqual(local_image("../config/site.json"), "")
        self.assertEqual(local_image("config/site.json"), "")
        self.assertEqual(local_image("assets/missing.png"), "")

    def test_invalid_json_type(self):
        with self.assertRaises(ValueError):
            validate_apps({})

    def test_comment_configuration_failure_isolated(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "config").mkdir()
            (root / "data").mkdir()
            (root / "config/site.json").write_text((ROOT / "config/site.json").read_text(encoding="utf-8"), encoding="utf-8")
            (root / "data/apps.json").write_text("[]", encoding="utf-8")
            for content in ["{broken", '{"enabled":true,"repo":"invalid"}', "[]"]:
                (root / "config/giscus.json").write_text(content, encoding="utf-8")
                p = load_payload(root)
                self.assertFalse(p["giscus"]["enabled"])
                self.assertTrue(p["warnings"])

    def test_unsafe_app_link_removed(self):
        apps, warnings = validate_apps([{**self.example,"appUrl":"javascript:alert(1)"}])
        self.assertEqual(apps[0]["appUrl"], "")
        self.assertEqual(len(warnings), 1)


if __name__ == "__main__":
    unittest.main(verbosity=2)
