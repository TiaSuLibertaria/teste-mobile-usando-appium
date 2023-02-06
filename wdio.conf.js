const { join } = require('path');

exports.config = {
  hostName: 'localhost',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  framework: 'mocha',

  capabilities: [
    {
      platformName: 'Android',
      platformVersion: '11',
      deviceName: 'emulator-5554',
      automationName: 'UiAutomator2',
      app: join(process.cwd(), './app/android/desafio-teste.apk'),
      appActivity: 'com.wdiodemoapp.MainActivity',
    },
  ],
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000,
  },
  waitForTimeout: 30000,
};
