'use strict';

gemini.suite('todomvc', (suite) => {
    suite.setUrl('/');

    gemini.suite('input', (suite) => {
        suite
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
            .capture('plain', (actions) => {
                actions
                    .sendKeys('Самое важное дело жизни')
                    .sendKeys(gemini.ENTER)
            })
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
            .capture('plain', (actions) => {
                actions
                    .sendKeys('Подготовить доклад на Я.Субботник')
                    .sendKeys(gemini.ENTER)
                    .click('#todo-list>li:last-child .toggle')
                    .wait(400)
                    .mouseMove('#todo-list', { x: -100, y: -100 })  // убираем фокус
            })
            .capture('hovered', (actions) => {
                actions
                    .mouseMove('#todo-list>li:last-child')
            })
    });

    gemini.suite('footer', (suite) => {
        suite
            .setCaptureElements('#footer')
            .capture('plain', (actions) => {
                actions
                    .sendKeys('#new-todo', 'sometext')
                    .sendKeys(gemini.ENTER)
            })
            .capture('btn-hovered', (actions) => {
                actions
                    .mouseMove('#filters>li:nth-child(2)')
            })
    });
});
