'use strict';

module.exports = {
    rootUrl: 'http://localhost:8080/',
    gridUrl: 'http://localhost:4444/wd/hub',

    // sessionsPerBrowser: 3,

    browsers: {
        'desktop-chrome': {
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
