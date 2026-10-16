# Current task

- Task: Киберпанк-hero главной в режиме cyber: портрет слева, терминал справа, диагностические шкалы и голографические кнопки
- Type: feature
- Constraints:
  - Ветка v5.0.0
  - Светлая тема без класса `cyber` остаётся прежней: разметка Hero по умолчанию не меняется, новый блок виден только под `.cyber`
  - Контент берётся из существующих переводов: `bio`, `pay`, `skills.categories`, контакты
  - Портрет — `src/shared/assets/photo-cyber1.png`
  - Тесты Hero и Avatar продолжают проходить
- Acceptance criteria:
  - Под `.cyber` на главной: слева крупный портрет, справа имя моно-гротеском, должность, терминал с навыками зелёно-голубым текстом
  - Внизу диагностические шкалы навыков с голубым свечением и кнопки контактов с красно-розовым свечением
  - Фон: тёмный металл, микросхемы, красно-голубая подсветка по краям, размытые огни
  - Без класса `cyber` страница выглядит как раньше
- Affected files:
  - docs/ai-workflow/current-task.md
  - src/components/Hero.tsx
  - src/components/CyberHero.tsx
  - src/shared/ui/cyber-backdrop.tsx
  - src/app/styles/index.css
  - src/__tests__/components/Hero.test.tsx
- Plan:
  1. `CyberHero` — отдельный компонент с сеткой портрет / инфо, терминалом и шкалами; рендерится в Hero рядом с текущей разметкой, по умолчанию `hidden`
  2. `.cyber` прячет старый hero-блок и показывает `CyberHero`
  3. Фон: металл с микросхемами, красно-голубые кромки, боке-огни
  4. Палитра `.cyber`: голубой энергии, янтарь сенсора, красно-розовый для кнопок
  5. Тесты: мок портрета в Hero.test, lint, test, build
- Implementation status: реализовано + итерация по правкам пользователя
  - CyberHero: терминал выводит топ-12 навыков, панель шкал `skill.matrix`, кнопки uplink — grid равной ширины
  - Секции: кикер `sector.NN`, заголовки моно со свечением, `hud-panel` с cyan-рамкой и уголками, сегментированные skill-бары, голографические бейджи/кнопки, футер
  - Рестайл остальных блоков под cyber (только hook-классы в TSX + правила `.cyber` в index.css):
    - «Далее хочу изучить» — метка `queue.learning`, заголовок моно, pink-чипы, выравнивание влево
    - Итоги опыта — data-rows `> КЛЮЧ` / cyan-значение в пунктирных ячейках; пустое описание скрыто (`:empty`)
    - Карточки опыта — `org.` компания, янтарная должность, geo/период как cyan-чипы, проект `proj://` с cyan/pink акцент-линией, `task.` / `stack.` подзаголовки, список с `> ` вместо точек
    - Личные проекты — `proj://` заголовок, `stack.` метка, скриншоты с cyan-рамкой, pink-кнопки ссылок
    - Личная информация — карточка «Личные данные» скрыта в cyber (`useCyberThemeEnabled`, дублирует hero `personal.data`); шапки `profile.<name>`, key/value строки, зелёные бейджи `.text-success`, «Рекомендации» растянуты на 2 колонки (lg) для ровной сетки
    - Контакты — `ch.<label>` метка, cyan-значение, иконка в квадрате 2px со свечением (cyan/pink/green по типу), pink-голографические ghost-кнопки
    - CTA — метка `uplink.request`, default-кнопка (`.gradient-primary.text-primary-foreground`) стала cyan-голографической
    - Футер — `build-key`/`build-kv`: pink-ключи, cyan-значения, верхнее свечение
  - Итерация 3: `skills.<key>` вместо `module.`, `role://` у должности, англ. snake_case-метки через `cyber-relabel[data-cyber]`, «Проект:»/«Project:» убраны из переводов, опечатка «Конфигурация», крупнее CPU/RAM, разделитель доп. опыта — чип, масонри (CSS columns, 2/3 колонки) для навыков и личного, hero uplink растянут, контакты — терминал `root@cv:~/contacts` (условный рендер в cyber)
- Review findings (исправлено):
  - мёртвые классы `cyber-title`/`cyber-terminal`/`hud-panel` в Hero и правила в css, `scan-drift` — удалены
  - CyberHero рендерится только при включённой теме (`useCyberThemeEnabled`, безопасен вне провайдера)
  - добавлен `CyberHero.test.tsx` (строковый `t`, сортировка/лимит, терминал)
  - a11y: `role='group'` у терминала, `aria-hidden` у тега портрета, второй `h1` заменён на `p`, ключи `${category}-${skill}`
  - reduced-motion для `.cyber-diag-fill`
  - найден и исправлен TS2322 в `Contacts.tsx` (тип таймера) — также закоммичено в `v4.3.0`
- QA results:
  - `yarn test --watchman=false src/__tests__` — 30 suites / 109 tests passed
  - `tsc -b` — 0 ошибок
  - Prettier --write на изменённых файлах — ок (`prettier --check .` падает на 11 давних файлах вне задачи)
  - Визуальная проверка: cyber-режим hero/skills/experience/personal/contacts/footer, светлая тема без изменений
  - `yarn build` (vite) — не запускался по решению пользователя; lint-скрипта в репозитории нет
- Final outcome: готово, ждёт коммита на `v5.0.0`
