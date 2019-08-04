# GULP with PUG + SCSS + BOOTSTRAP

## Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используются препроцессоры [Pug](https://pugjs.org/) и [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется CSS-сетка [bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* используется жёсткий кодгайд

## Установка
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу, введите команду: ```npm run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```npm run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## Файловая структура

```
gulp-pug-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
|   |   |── modules
|   |   |   |── header
|   |   |   |── main
|   |   |   |── footer
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Корень папки:
    * ```.babelrc.js``` — настройки Babel
    * ```.bemrc.js``` — настройки БЭМ
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки и компоненты: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/views/pages```
    * SCSS-файлы: ```src/styles```
    * служебные Pug-файлы: ```src/views```
    * конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```npm run dev```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## Команды
* ```npm run lint:style``` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). Для WebStorm 
или PHPStorm необходимо включить Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint``` (ошибки будут исправлены автоматически при сохранении файла)
* ```npm run lint:style --fix``` - исправить ошибки в SCSS-файлах
* ```npm run dev``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект с оптимизацией без запуска сервера
* ```npm run build views``` - скомпилировать Pug-файлы
* ```npm run build styles``` - скомпилировать SCSS-файлы
* ```npm run build scripts``` - собрать JS-файлы
* ```npm run build images``` - собрать изображения
* ```npm run build webp``` - сконвертировать изображения в формат ```.webp```
* ```npm run build sprites```- собрать спрайты
* ```npm run build fonts``` - собрать шрифты
* ```npm run build favicons``` - собрать фавиконки
* ```npm run build gzip``` - собрать конфигурацию Apache

## Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один Pug-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * Pug-файл блока импортируется в файл ```src/views/index.pug``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├── header
│   │   ├── header.pug
│   │   ├── header.js
│   │   ├── header.scss
```
Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующие команды: 
* ```bem create my-block``` - для создания папки БЭМ-блока, где ```my-block``` - имя БЭМ-блока
* ```bem create my-component -l src/blocks/components``` для создания компонента
* ```bem create my-component -l src/blocks/components && bem create my-block``` - создать всё вместе

### Компоненты
* компоненты (например, иконки, кнопки) оформляются в Pug с помощью примесей
* в папке components(```src/blocks/components```) будут храниться модули, которыми мы хотим пользоваться, например
```
── components
    ├── _buttons.scss
    ├── _cards.scss
    ├── _comments.scss
    ├── _footer.scss
    ├── _header.scss
```
* папка одного компонента содержит в себе один Pug-файл, один SCSS-файл и один JS-файл (если у компонента используется скрипт)
```
├── components
    ├── header.pug
    ├── header.scss
    ├── header.js
```
    * Pug-файл компонента импортируется в файл главной страницы ```src/views/index.pug``` (или в необходимый файл страницы, откуда будет вызываться компонент)
    * SCSS-файл компонента импортируется в файл ```src/blocks/components/_components.scss```
    * JS-файл компонента импортируется в файл ```src/js/import/components.js```

### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * каждая страница (в том числе главная) наследует шаблон ```src/views/layouts/default.pug```
    * главная страница: ```src/views/index.pug```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://transfonter.org/)
    * Что бы добавить их
    ```
    Загружаем шрифты на сайт
    Скачиваем архив
    В архиве будет "stylesheet.css
    Копируем содержимое src/styles/base/_fonts.scss указывая путь:
    ../../fonts/anynameoffont.woff
    ```


### Изображения 
* изображения находятся в папке ```src/img```
    * изображение для генерации фавиконок должно находиться в папке ```src/img/favicon``` и иметь размер не менее ```1024px x 1024px```
    * изображения автоматически конвертируются в формат ```.webp```. Подробная информация по использованию [тут](https://vk.com/@vk_it-webp).

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm add package_name```
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например: 
    ```javascript 
    import $ from "jquery";
    ```
    импортируются в 
    ```
    ├── src
    │   ├── js
    │   │   ├── index.js
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/vendor/_libs.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

:warning: Если в вашем проекте используется несколько библиотек, которые необходимо подключать на нескольких страницах, во избежании ошибок нужно: 
* по пути ```src/js/import``` создать папку ```pages```
* в папке ```pages``` создать js-файл для страницы, например, ```pageA.js```, и импортировать туда библиотеку, которая будет использоваться только на этой странице
    * аналогично проделать шаг для дополнительных страниц
* в файле ```webpack.config.js``` в точку входа добавить js-файлы страниц, пример:
```javascript 
entry: {
    main: "./src/js/index.js",
    pageA: "./src/js/import/pages/pageA.js",
    pageB: "./src/js/import/pages/pageB.js"
}
```
* подключить скомпилированные js-файлы на необходимых страницах 

## CSS-сетка bootstrap

|               | Extra small<576px  | Small≥576px  |Medium≥768px  | Large≥992px  | Extra large≥1200px  |
| ------------- |:------------------:|:------------:|:-------------:|:------------:|:--------------------:|
| max-wide      |      none(auto)    |     540px    |      720px   |     960px    |        1140px       |
| class         |        .col-       |    .col-sm   |     .col-md  |    .col-lg   |      .col-xl-       |
| number of col |   12                                                                                  |
| intend width  |   30px(15px each side of column)                                                      |


### убрать пробелы между колонами

```
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
```
