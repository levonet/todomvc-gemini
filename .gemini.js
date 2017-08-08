'use strict';

module.exports = {
    rootUrl: 'http://localhost:8080/',
    gridUrl: 'http://localhost:4444/wd/hub',

    // sessionsPerBrowser: 3,
    // retry: 2,

    browsers: {
        'desktop-chrome': {
            // windowSize: '1280x768',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ '--disable-gpu' ]
                }
            }
        }
    },

    system: {
        plugins: {
            'html-reporter': {
                enabled: true,
                path: 'gemini-report'
            }
        }
    }
};
