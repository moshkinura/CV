# Current task

- Task: Починить падающие тесты Hero и CyberHero
- Type: test improvement
- Constraints:
  - Не менять вёрстку и поведение компонентов
  - Локальная правка version 5.0.0 в package.json не коммитится
- Acceptance criteria:
  - `yarn test --watchman=false` — все сьюты зелёные
- Affected files:
  - src/__tests__/components/Hero.test.tsx
  - src/__tests__/components/CyberHero.test.tsx
  - docs/ai-workflow/current-task.md
- Plan:
  1. В Hero.test проверять класс `min-h-svh`, как в Hero.tsx
  2. В CyberHero.test мокать `@/shared/assets/cyber.webm`, который импортирует CyberPortrait
  3. Прогнать весь Jest
- Implementation status: правки внесены
- Review findings: тесты приведены к текущим классам и пути ассета, компоненты не менялись
- QA results: yarn test --watchman=false — 30 suites / 109 tests passed
- Final outcome: все тесты зелёные
