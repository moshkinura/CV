# Current task

- Task: Флаги quality и speed в pngmin по шкале libimagequant
- Type: feature
- Constraints:
  - Только стандартная библиотека Go, без порта libimagequant
  - quality 0..100, одно число: и минимум, и цель, как set_quality(q, q)
  - quality 100 — прежний путь без потерь
  - speed 1..10, по умолчанию 4, как в imagequant
  - Если цель качества не достигнута или файл не меньше — исходные байты
  - Картинка с альфой не квантуется: у палитры нет отдельной альфы на пиксель
  - Vite и imagemin не менять
- Acceptance criteria:
  - CLI принимает -quality и -speed и отвергает значения вне диапазона кодом 1
  - quality 100 совпадает с Compress без опций
  - quality ниже 100 на непрозрачном кадре с многими цветами даёт color type 3
  - Шум при quality 99 остаётся исходным файлом
  - gofmt чистый, go test . в tools/pngmin проходит
- Affected files:
  - docs/ai-workflow/current-task.md
  - tools/pngmin/compress.go
  - tools/pngmin/quantize.go
  - tools/pngmin/main.go
  - tools/pngmin/compress_test.go
- Plan:
  1. Options и проверка диапазонов
  2. При quality < 100 — гистограмма, median cut до первого числа цветов, чей RMSE укладывается в допуск, затем Floyd–Steinberg и палитра
  3. speed сужает гистограмму, шаг выборки и лестницу числа цветов
  4. CLI и тесты
- Implementation status: готово
- Review findings:
  - Допуск качества считается по пикселям, не только по средним корзин гистограммы
  - Floyd–Steinberg включён на всём диапазоне speed 1..10
  - Альфа остаётся на прежнем пути без потерь
- QA results:
  - gofmt -l пустой
  - go test . в tools/pngmin: ok
  - photo.png при -quality 70 -speed 4: 968118 → 246427, color 2→3
  - yarn lint, tsc, Jest, vite build к фиче не относятся: JS-файлы не меняются
- Final outcome: тестовый флаг -middle-out пишет lossy-превью и остаток в чанк moUT. -restore собирает исходные пиксели. В логе коэффициент Вайссмана относительно прохода без потерь.
