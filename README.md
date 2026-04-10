# FitState — Quiz Landing Page

Сайт с тестом-архетипом для курса по фитнесу. После прохождения теста пользователь переходит в Telegram-бота.

## Быстрый старт на GitHub Pages

### 1. Создай репозиторий
- Зайди на github.com → New repository
- Имя: `fitstate` (или любое другое)
- Public (обязательно для GitHub Pages)
- Нажми Create repository

### 2. Загрузи файлы
```bash
git init
git add .
git commit -m "Initial FitState site"
git branch -M main
git remote add origin https://github.com/ТВОЙ_ЮЗЕРНЕЙМ/fitstate.git
git push -u origin main
```

### 3. Включи GitHub Pages
- Settings → Pages
- Source: GitHub Actions
- Сохрани

Сайт будет доступен по адресу:
`https://ТВОЙ_ЮЗЕРНЕЙМ.github.io/fitstate`

### 4. Замени имя Telegram-бота
В файле `quiz.js` найди строку:
```js
const TG_BOT = "fitstate_quiz_bot";
```
Замени `fitstate_quiz_bot` на юзернейм своего реального бота.

### 5. Перенос на свой домен
В Settings → Pages → Custom domain — вставь свой домен.
Добавь CNAME запись у провайдера домена.

## Структура файлов
```
fitstate/
├── index.html          # Главная страница
├── style.css           # Стили
├── quiz.js             # Логика теста
└── .github/
    └── workflows/
        └── deploy.yml  # Автодеплой
```

## Архетипы и параметры для бота
| Архетип | Параметр start |
|---|---|
| Эмоциональный едок | `emotional_eater` |
| Социальный заложник | `social_hostage` |
| Метаболический скептик | `metabolic_skeptic` |
| Стартер-стопер | `starter_stopper` |

Бот получает параметр через `message.text` после `/start`.
