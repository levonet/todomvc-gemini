# Добавляем gemini в пример [todomvc](https://github.com/tastejs/todomvc)

1. Установка gemini и окружения; первый тест
   - установка Selenium 
     ```sh
     npm install -g selenium-standalone
     selenium-standalone install
     ```
   - установка gemini в проект
     ```sh
     npm install --save-dev gemini
     npm install --save-dev gemini-gui
     ```
   - установка http-сервера, который понадобится только на этом шаге 
     ```sh
     npm install http-server
     ```
   - запуск Selenium
     ```sh
     selenium-standalone start
     ```
   - запуск http-сервера
     ```sh
     http-server
     ```
   - запуск gemini-тестов в gemini-gui
     ```sh
     gemini-gui test/gemini/suites/todomvc.gemini.js
     ```
   - рассказ: в чем проблемы такого использования gemini
2. Пример теста с застабленными данными
   - установка [json-server](https://github.com/typicode/json-server/)
     ```sh
     npm install json-server
     ```
   - запуск http-сервера со стабом `/api/todos`
     ```sh
     json-server db.json --port 8080 --routes routes.json --static . --read-only
     ```
3. Оптимизация и хранение изображений
   - Git Large File Storage
     - установка [git-lfs](https://git-lfs.github.com)
     - инициализация в проекте
       ```sh
       git lfs track test/gemini/references/**/*.png
       ```
   - Плагин оптимизации изображений [gemini-optipng](https://github.com/gemini-testing/gemini-optipng)
     ```sh
     npm install --save-dev gemini-optipng
     ```
   - Запуск gemini в режиме сохранения эталонных изображений
     ```sh
     gemini update test/gemini/suites/todomvc.gemini.js
     ```
4. Обработка ошибок и отчеты
   - [HTML-отчет](https://github.com/gemini-testing/html-reporter)
     ```sh
     npm install --save-dev html-reporter
     ```
   - [JSON-отчет](https://github.com/gemini-testing/json-reporter)
   - [TeamCity-отчет](https://github.com/gemini-testing/gemini-teamcity)
   - [stat-reporter](https://github.com/gemini-testing/stat-reporter)
   - [retry](https://github.com/gemini-testing/gemini/blob/master/doc/config.md#browsers-settings)
   - [skip()](https://github.com/gemini-testing/gemini/blob/master/doc/tests.md#suite-builder-methods)
5. Отчет о покрытии CSS тестами
   - Утилита для генерации HTML-отчета [gemini-coverage](https://github.com/gemini-testing/gemini-coverage)
     ```sh
     npm install --save-dev gemini-coverage
     ```
