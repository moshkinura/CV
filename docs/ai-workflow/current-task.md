# Current task

- Task: Подключить @itcamel/text-kit вместо i18next
- Type: refactor
- Constraints:
  - Словари `src/locales/*/translation.json` не менять
  - Язык по-прежнему ru/en, cookie `i18next`, fallback ru
  - Вызовы `t(key)` и `t(key, { returnObjects: true })` в компонентах сохраняют смысл
- Acceptance criteria:
  - Пакет в dependencies, i18next/react-i18next удалены
  - Смена языка обновляет тексты
  - `yarn test` и `tsc -b` проходят
- Affected files:
  - package.json
  - yarn.lock
  - jest.config.cjs
  - src/app/modules/i18n.ts
  - src/shared/i18n/useTranslation.ts
  - компоненты и тесты, которые импортировали react-i18next
- Plan:
  1. Поставить `@itcamel/text-kit` и инициализировать словари в `i18n.ts`
  2. Хук `useTranslation` на `useLanguage` + `t`/`select`, с записью cookie
  3. Перевести импорты и моки тестов
  4. Удалить i18next, прогнать тесты и tsc
- Implementation status: i18next заменён на @itcamel/text-kit
- Review findings: `useLanguage` из beta.1 отдаёт новый snapshot и зацикливает React, поэтому подписка на язык своя, `t`/`select`/`setLanguage` из пакета
- QA results: yarn test --watchman=false — 30 suites / 109 tests passed; tsc -b — 0 ошибок
- Final outcome: пакет подключён, смена языка пишет cookie i18next; коммит реализации не делался
