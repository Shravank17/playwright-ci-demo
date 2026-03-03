// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 40 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',

projects:[

  {
    name: 'chrome',
    use:{

      browserName: 'chromium',
       headless: false,
        screenshot: 'on',
         trace: 'retain-on-failure'






    }







  },

  {
    name:'safari',
    use:{
      
      browserName: 'webkit',
       headless: false,
        screenshot: 'on',
        ignoreHTTPSErrors: true,
        video: 'on',
        permissions: ['geolocation'],
         trace: 'retain-on-failure'
    }
  }




]

 

  
});

