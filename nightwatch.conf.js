/* eslint-disable */

const deepmerge = require('deepmerge');

const userOptions = JSON.parse(process.env.NIGHTWATCH_USER_OPTIONS || '{}');

const baseConfig = {
  src_folders: ['tests/e2e/specs'],
  output_folder: 'tests/e2e/reports',

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515,
    cli_args: [
      '--verbose'
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
            '--headless'
          ],
        },
      }
    }
  },
}

console.log(JSON.stringify(baseConfig, null, 2));

module.exports = deepmerge(baseConfig, userOptions);
