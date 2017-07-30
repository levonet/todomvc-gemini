'use strict';

module.exports = {
    rootUrl: 'http://localhost:8080/',
    gridUrl: 'http://localhost:4444/wd/hub',
    screenshotsDir: 'test/gemini/references',

    // sessionsPerBrowser: 3,
    // retry: 2,

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
    },

    sets: {
        local: {
            files: ['test/gemini/suites/**/*.gemini.js'],
            browsers: ['desktop-chrome']
        }
    },

    system: {
        plugins: {
            optipng: {
                level: 5
            },
            'html-reporter': {
                enabled: true,
                path: 'gemini-report'
            },
            'stat-reporter/gemini': {
                enabled: true
            },
            'json-server': {
                enabled: true,
                port: 8080,
                schema: 'db.json',
                routes: 'routes.json',
                static: '.',
                readOnly: true,
                quiet: true
            }
        },
        coverage: {
            enabled: true,
            exclude: [
                'node_modules/todomvc-common/base.css',
                'null'
            ]
        }
    }
};
