'use strict';

gemini.suite('todomvc', (suite) => {
    suite.setUrl('/');

    gemini.suite('input', (suite) => {
        suite
            .skip('desktop-firefox', 'Not working autofocus JIRA-9999')
            .setCaptureElements('#new-todo')
            .capture('empty')
            .capture('filled', (actions) => {
                actions
                    .sendKeys('Самое важное дело жизни')
            })
    });

    gemini.suite('active', (suite) => {
        suite
            .setCaptureElements('#todo-list>li:first-child')
            .capture('plain')
            .capture('hovered', (actions) => {
                actions
                    .mouseMove('#todo-list>li:first-child')
            })
            .capture('edit', (actions) => {
                actions
                    .doubleClick('#todo-list>li:first-child')
            })
    });

    gemini.suite('completed', (suite) => {
        suite
            .setCaptureElements('#todo-list>li:last-child')
            .capture('plain')
            .capture('hovered', (actions) => {
                actions
                    .mouseMove('#todo-list>li:last-child')
            })
    });

    gemini.suite('footer', (suite) => {
        suite
            .setCaptureElements('#footer')
            .capture('plain')
            .capture('btn-hovered', (actions) => {
                actions
                    .mouseMove('#filters>li:nth-child(2)')
            })
    });
});
