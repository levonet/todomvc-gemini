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
