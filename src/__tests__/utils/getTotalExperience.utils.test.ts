import { enUS, ru } from 'date-fns/locale';

import { getTotalExperienceText } from '@/shared/utils/getTotalExperience.utils';

describe('getTotalExperienceText', () => {
	const NOW = new Date('2025-08-18T00:00:00.000Z');

	beforeAll(() => {
		// фиксируем "сейчас" для детерминизма open-ended периодов
		jest.useFakeTimers();
		jest.setSystemTime(NOW);
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('возвращает пустую строку, если нет валидных интервалов', () => {
		const items = [
			{ period: ['1997-02-25', null] as const }, // неверный формат
			{ period: ['2020/02/30', '2020/03/01'] as const }, // невалидная дата
			{ period: ['2021/05/10', '2021/05/09'] as const }, // start > end
		];
		expect(getTotalExperienceText(items, ru)).toBe('');
	});

	it('складывает раздельные интервалы (RU)', () => {
		// 2019/01/01..2019/04/01 = 3 мес, 2020/01/01..2020/02/01 = 1 мес → итого 4 мес
		const items = [
			{ period: ['2019/01/01', '2019/04/01'] as const },
			{ period: ['2020/01/01', '2020/02/01'] as const },
		];
		expect(getTotalExperienceText(items, ru)).toBe('4 месяца');
	});

	it('мерджит пересекающиеся интервалы (RU)', () => {
		// Без мерджа: (2 мес) + (2 мес) = 4 мес
		// С мерджем: 2020/01/01..2020/04/01 = 3 мес
		const items = [
			{ period: ['2020/01/01', '2020/03/01'] as const },
			{ period: ['2020/02/01', '2020/04/01'] as const },
		];
		expect(getTotalExperienceText(items, ru)).toBe('3 месяца');
	});

	it('мерджит стыкующиеся интервалы (конец=начало) (RU)', () => {
		// 2020/01/01..2020/02/01 и 2020/02/01..2020/03/01 → 2 мес
		const items = [
			{ period: ['2020/01/01', '2020/02/01'] as const },
			{ period: ['2020/02/01', '2020/03/01'] as const },
		];
		expect(getTotalExperienceText(items, ru)).toBe('2 месяца');
	});

	it('округляет вверх, если остаточных дней >= 15 (RU)', () => {
		// 2020/01/01..2020/02/16 → 1 мес + 15 дней → округляет до 2 мес
		const items = [{ period: ['2020/01/01', '2020/02/16'] as const }];
		expect(getTotalExperienceText(items, ru)).toBe('2 месяца');
	});

	it('"<1 месяца" для open-ended < 15 дней (RU)', () => {
		// now = 2025-08-18, 8 дней стажа
		const items = [{ period: ['2025/08/10', null] as const }];
		const NBSP = '\u00A0';
		expect(getTotalExperienceText(items, enUS)).toBe(`<1${NBSP}month`);
	});

	it('"<1 month" для open-ended < 15 дней (EN)', () => {
		const items = [{ period: ['2025/08/10', null] as const }];
		const NBSP = '\u00A0';
		expect(getTotalExperienceText(items, enUS)).toBe(`<1${NBSP}month`);
	});

	it('форматирует годы и месяцы (RU)', () => {
		// 2023/05/18..2025/08/18 = 27 мес → 2 года 3 месяца
		const items = [{ period: ['2023/05/18', '2025/08/18'] as const }];
		expect(getTotalExperienceText(items, ru)).toBe('2 года 3 месяца');
	});

	it('форматирует годы и месяцы (EN)', () => {
		const items = [{ period: ['2023/05/18', '2025/08/18'] as const }];
		expect(getTotalExperienceText(items, enUS)).toBe('2 years 3 months');
	});

	it('игнорирует невалидные периоды, но считает валидные', () => {
		const items = [
			{ period: ['bad', '2020/01/01'] as const },
			{ period: ['2020/01/01', '2020/03/01'] as const }, // 2 мес
			{ period: ['also/bad', null] as const },
		];
		expect(getTotalExperienceText(items, enUS)).toBe('2 months');
	});
});
