import { enUS, ru } from 'date-fns/locale';

import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';

describe('getDateFnsLocale', () => {
	it.each([
		['ru', ru],
		['ru-RU', ru],
		['RU', ru],
		['Ru-ru', ru],
		['en', enUS],
		['en-US', enUS],
		['EN-gb', enUS],
	])('возвращает корректную локаль для "%s"', (lng, expected) => {
		expect(getDateFnsLocale(lng)).toBe(expected);
	});

	it.each(['', 'de', 'fr-FR', 'es', 'xx-YY'])(
		'возвращает ru по умолчанию для неизвестного "%s"',
		lng => {
			expect(getDateFnsLocale(lng)).toBe(ru);
		},
	);
});
