# AI Hedge Fund Frontend

Это фронтенд-часть проекта AI Hedge Fund, построенная с использованием современного стека технологий:

- React + TypeScript
- Vite
- Tailwind CSS
- Zustand
- Feature-Sliced Design (FSD)

## Структура проекта

Проект организован по методологии Feature-Sliced Design:

```
src/
├── app/         # Инициализация приложения
├── processes/    # Процессы
├── pages/        # Страницы
├── widgets/      # Виджеты
├── features/     # Фичи
├── entities/     # Бизнес-сущности
└── shared/       # Переиспользуемый код
```

## Установка и запуск

```bash
# Установка зависимостей
yarn

# Запуск в режиме разработки
yarn dev

# Сборка для продакшена
yarn build
```

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
