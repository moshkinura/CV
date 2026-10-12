# Current task

- Task: Галочка копирования только у того контакта, который скопировали
- Type: bugfix
- Constraints:
  - Ветка v4.3.0
  - Не менять вёрстку карточек и тексты
  - Сброс индикатора через 1.6 с сохраняется
- Acceptance criteria:
  - Копирование телефона показывает галочку только на кнопке телефона
  - Кнопка email остаётся с иконкой Copy
  - Через таймер кнопка телефона снова показывает Copy
- Affected files:
  - src/widgets/Contacts/Contacts.tsx
  - src/**tests**/widgets/Contacts.test.tsx
  - docs/ai-workflow/current-task.md
- Plan:
  1. Хранить ключ скопированного значения, а не общий boolean
  2. Сбрасывать предыдущий таймер при новом копировании
  3. Проверить тестом, что email не получает галочку
- Implementation status: готово
- Review findings: общий флаг copied рисовал CheckCircle на каждой copyable-кнопке
- QA results: yarn test src/__tests__/widgets/Contacts.test.tsx — 5 passed
- Final outcome: галочка копирования привязана к значению контакта, на v4.3.0
