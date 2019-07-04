/* eslint-disable */

const deepmerge = require('deepmerge');
const chromedriver = require('chromedriver');

const DRIVER_PORT = process.env.DRIVER_PORT || 9515;

const userOptions = JSON.parse(process.env.NIGHTWATCH_USER_OPTIONS || '{}');

const baseConfig = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: DRIVER_PORT,
    cli_args: [
      '--verbose',
      `--port=${DRIVER_PORT}`
    ],
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        acceptInsecureCerts: true,
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--headless',
            '--disable-gpu'
          ],
        },
      }
    }
  },
}

console.log(JSON.stringify(baseConfig, null, 2));

module.exports = deepmerge(baseConfig, userOptions);
