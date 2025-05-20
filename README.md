````markdown
# 📝 Редактируемое резюме с возможностью скачивания в PDF

## 📄 Описание

Интерактивная веб-страница-резюме, реализованная на HTML, CSS и JavaScript без использования сторонних фреймворков. Страница позволяет:

- Редактировать содержимое резюме прямо на странице.
- Сохранять изменения между обновлениями страницы.
- Применять CSS-анимации при изменении элементов.
- Скачивать отредактированное резюме в формате PDF.
- Наслаждаться эффектом "Material Wave" при клике на элементы.
- Пользоваться адаптивным интерфейсом на всех устройствах.

## 📦 Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/dokbrawn/Lab_14_JS_PDF_Material_Wave.git
   cd Lab_14_JS_PDF_Material_Wave
````

2. Установите зависимости:

   ```bash
   npm install
   ```

## 🚀 Запуск в режиме разработки

```bash
npm run dev
```

Перейдите по адресу `http://localhost:xxxx`.

## 🏗️ Сборка проекта

```bash
npm run build
```

Файлы для публикации появятся в директории `/dist`.

## 🌐 Публикация на GitHub Pages

1. Установите `gh-pages` (если ещё не установлен):

   ```bash
   npm install --save-dev gh-pages
   ```

2. Добавьте в `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Выполните:

   ```bash
   npm run deploy
   ```

## ✅ Проверка качества

* **HTML**: [https://validator.w3.org/](https://validator.w3.org/)
* **JavaScript**: [https://jshint.com/](https://jshint.com/) или ESLint ([https://eslint.org/](https://eslint.org/))
* **Форматирование кода**: [https://prettier.io/](https://prettier.io/)

## ⚙️ Требования

* Node.js ≥ 16.x
* npm ≥ 7.x

---

Разработано в рамках входного задания по Front-End.

```
