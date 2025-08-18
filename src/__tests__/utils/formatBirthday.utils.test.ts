import '@testing-library/jest-dom';
import { enUS, ru } from 'date-fns/locale';

import { formatBirthday } from '@/shared/utils/formatBirthday.utils';

describe('formatBirthday', () => {
	const NOW = new Date('2025-08-18T00:00:00.000Z');

	beforeAll(() => {
		jest.useFakeTimers();
		jest.setSystemTime(NOW);
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('форматирует дату и возраст на ru', () => {
		const res = formatBirthday('1997/02/25', ru);
		expect(res).toBe('25.02.1997 (28 лет)');
	});

	it('корректно считает возраст, если день рождения ещё не наступил в текущем году', () => {
		const res = formatBirthday('1997/09/01', ru);
		expect(res).toBe('01.09.1997 (27 лет)');
	});

	it('работает с enUS локалью', () => {
		const res = formatBirthday('1997/02/25', enUS);
		expect(res).toBe('25.02.1997 (28 years)');
	});

	it('возвращает пустую строку для невалидной даты', () => {
		expect(formatBirthday('1997-02-25', ru)).toBe(''); // ожидался формат yyyy/MM/dd
		expect(formatBirthday('invalid', ru)).toBe('');
	});
});
