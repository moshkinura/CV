import {
	Locale,
	format,
	formatDuration,
	intervalToDuration,
	isValid,
	parse,
} from 'date-fns';

export const formatBirthday = (value: string, locale: Locale) => {
	const d = parse(value, 'yyyy/MM/dd', new Date());
	if (!isValid(d)) return '';

	const { years = 0 } = intervalToDuration({ start: d, end: new Date() });

	const dateStr = format(d, 'dd.MM.yyyy', { locale });
	const yearsStr = formatDuration({ years }, { locale, format: ['years'] }); // "28 лет"

	return `${dateStr} (${yearsStr})`; // 25.02.1997 (28 лет)
};
