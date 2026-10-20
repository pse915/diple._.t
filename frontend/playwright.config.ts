import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests', fullyParallel: false, workers: 1, timeout: 30000,
  reporter: [['list'],['json',{outputFile:'test-results/results.json'}]],
  use: { baseURL: process.env.BASE_URL || 'http://127.0.0.1:8520', viewport:{width:1440,height:1080}, trace:'retain-on-failure' },
  webServer: [
    {command:'python -m streamlit run ../app.py --server.headless=true --server.port=8520 --server.fileWatcherType=none', url:'http://127.0.0.1:8520/_stcore/health', reuseExistingServer:true, timeout:30000},
    {command:'python -m streamlit run ../tests/fixture_app.py --server.headless=true --server.port=8522 --server.fileWatcherType=none', url:'http://127.0.0.1:8522/_stcore/health', reuseExistingServer:true, timeout:30000}
    ,{command:'python -m streamlit run ../tests/admin_fixture.py --server.headless=true --server.port=8521 --server.fileWatcherType=none',url:'http://127.0.0.1:8521/_stcore/health',reuseExistingServer:true,timeout:30000}
    ,{command:'python -m streamlit run ../tests/admin_fixture.py --server.headless=true --server.port=8523 --server.fileWatcherType=none',env:{TEST_AUTH_TIMEOUT:'2'},url:'http://127.0.0.1:8523/_stcore/health',reuseExistingServer:true,timeout:30000}
  ]
});
