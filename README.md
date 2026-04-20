# Aurelius — стратегии азартных игр

SPA на React + Vite + Tailwind. Образовательный портал о математике казино.

## Локальный запуск

```bash
npm install
npm run dev
```

## Деплой на GitHub Pages — пошагово

### Вариант A. Автоматически через GitHub Actions (рекомендуется)

1. Запушьте код в репозиторий на GitHub.
2. Откройте **Settings → Pages**.
3. В разделе **Build and deployment → Source** выберите **GitHub Actions**.
4. Сделайте любой коммит в ветку `main` — workflow `.github/workflows/deploy.yml`
   соберёт проект и опубликует его автоматически.
5. Через 1–2 минуты сайт будет доступен по адресу:
   - `https://USERNAME.github.io/REPO-NAME/` — для обычных репозиториев
   - `https://USERNAME.github.io/` — если репозиторий называется `USERNAME.github.io`

Workflow сам определяет правильный `base` путь и включает HashRouter.

### Вариант B. Вручную

```bash
# Замените REPO-NAME на имя вашего репозитория
VITE_BASE=/REPO-NAME/ VITE_USE_HASH_ROUTER=true npm run build
```

Залейте содержимое папки `dist/` в ветку `gh-pages` и в **Settings → Pages**
выберите эту ветку.

## Почему страница может быть пустой?

| Симптом | Причина | Решение |
|---|---|---|
| Заголовок есть, тело пустое | Неправильный `VITE_BASE` — JS/CSS возвращают 404 | Установите `VITE_BASE=/имя-репо/` |
| 404 при обновлении страницы | GH Pages не знает SPA-маршрутов | HashRouter (включён автоматически) или `404.html` |
| Картинки не грузятся | Тоже про `BASE_URL` | Импортируйте через `import img from "@/assets/..."` |

Откройте DevTools → Console и Network: если видите 404 на `.js`/`.css` — это
точно проблема с `VITE_BASE`.
