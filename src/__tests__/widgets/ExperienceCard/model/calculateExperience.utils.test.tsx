import '@testing-library/jest-dom';
import { enUS, ru } from 'date-fns/locale';

import { calculateExperience } from '@/widgets/ExperienceCard/model/calculateExperience.utils.ts';

describe('calculateExperience', () => {
	// фиксируем "сейчас" для open-ended интервалов
	const NOW = new Date('2025-08-18T00:00:00.000Z');

	beforeAll(() => {
		process.env.TZ = 'UTC';
		jest.useFakeTimers();
		jest.setSystemTime(NOW);
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('возвращает пустую строку для невалидной даты', () => {
		expect(calculateExperience(['1997-02-25', null], ru)).toBe('');
		expect(calculateExperience(['bad', '2025/01/01'], ru)).toBe('');
	});

	it('меньше месяца → "<1 NBSP месяца" (ru) и "<1 NBSP month" (en)', () => {
		const NBSP = '\u00A0';
		// 8 дней стажа
		expect(calculateExperience(['2025/08/10', null], ru)).toBe(
			`<1${NBSP}месяца`,
		);
		expect(calculateExperience(['2025/08/10', null], enUS)).toBe(
			`<1${NBSP}month`,
		);
	});

	it('ровно 1 год (без месяцев)', () => {
		expect(calculateExperience(['2024/08/18', '2025/08/18'], ru)).toBe('1 год');
		expect(calculateExperience(['2024/08/18', '2025/08/18'], enUS)).toBe(
			'1 year',
		);
	});

	it('форматирует годы и месяцы (пример: 2 года 3 месяца / 2 years 3 months)', () => {
		expect(calculateExperience(['2023/05/18', '2025/08/18'], ru)).toBe(
			'2 года 3 месяца',
		);
		expect(calculateExperience(['2023/05/18', '2025/08/18'], enUS)).toBe(
			'2 years 3 months',
		);
	});

	it('только месяцы без лет (пример: 4 месяца / 4 months)', () => {
		expect(calculateExperience(['2025/04/18', '2025/08/18'], ru)).toBe(
			'4 месяца',
		);
		expect(calculateExperience(['2025/04/18', '2025/08/18'], enUS)).toBe(
			'4 months',
		);
	});

	it('start === end → "<1 …"', () => {
		const NBSP = '\u00A0';
		expect(calculateExperience(['2025/08/18', '2025/08/18'], ru)).toBe(
			`<1${NBSP}месяца`,
		);
		expect(calculateExperience(['2025/08/18', '2025/08/18'], enUS)).toBe(
			`<1${NBSP}month`,
		);
	});
});
