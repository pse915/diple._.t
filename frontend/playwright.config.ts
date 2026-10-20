import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', fullyParallel: false, workers: 1, timeout: 30000,
  reporter: [['list'],['json',{outputFile:'test-results/results.json'}]],
  use: { baseURL: process.env.BASE_URL || 'http://127.0.0.1:8620', viewport:{width:1440,height:1080}, trace:'retain-on-failure' },
  webServer: [
    {command:'python -m streamlit run ../app.py --server.headless=true --server.port=8620 --server.fileWatcherType=none', url:'http://127.0.0.1:8620/_stcore/health', reuseExistingServer:true, timeout:30000},
    {command:'python -m streamlit run ../tests/fixture_app.py --server.headless=true --server.port=8622 --server.fileWatcherType=none', url:'http://127.0.0.1:8622/_stcore/health', reuseExistingServer:true, timeout:30000}
    ,{command:'python -m streamlit run ../tests/admin_fixture.py --server.headless=true --server.port=8621 --server.fileWatcherType=none',url:'http://127.0.0.1:8621/_stcore/health',reuseExistingServer:true,timeout:30000}
    ,{command:'python -m streamlit run ../tests/admin_fixture.py --server.headless=true --server.port=8623 --server.fileWatcherType=none',env:{TEST_AUTH_TIMEOUT:'2'},url:'http://127.0.0.1:8623/_stcore/health',reuseExistingServer:true,timeout:30000}
  ]
});
