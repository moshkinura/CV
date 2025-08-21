import { format, isValid, parse } from 'date-fns';

export const formatDate = (
	period: readonly [string, string | null],
	now: string,
) => {
	const [startStr, endStr] = period;
	const parseYMD = (s: string) => parse(s, 'yyyy/MM/dd', new Date());
	const fmt = (d: Date) => format(d, 'MM.yyyy');

	const start = parseYMD(startStr);
	if (!isValid(start)) return '';

	if (!endStr) return `${fmt(start)} - ${now}`;

	const end = parseYMD(endStr);
	return `${fmt(start)} - ${isValid(end) ? fmt(end) : now}`;
};
