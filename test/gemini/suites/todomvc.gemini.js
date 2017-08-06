'use strict';

gemini.suite('todomvc', (suite) => {
    suite.setUrl('/');

    gemini.suite('page', (suite) => {
        suite
            .setCaptureElements('html')
            .capture('plain')
    });
});
