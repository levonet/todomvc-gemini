'use strict';

module.exports = {
    rootUrl: 'http://localhost:8080/',
    gridUrl: 'http://localhost:4444/wd/hub',
    screenshotsDir: 'test/gemini/references',

    // sessionsPerBrowser: 3,

    browsers: {
        'desktop-chrome': {
            windowSize: '1280x768',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ '--disable-infobars', '--disable-gpu' ]
                }
            }
        }
    }
};
