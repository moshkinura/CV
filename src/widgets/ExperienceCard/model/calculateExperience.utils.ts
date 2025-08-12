import {
	Locale,
	formatDuration,
	intervalToDuration,
	isValid,
	parse,
	startOfDay,
} from 'date-fns';

export const calculateExperience = (
	[startStr, endStr]: [string, string | null],
	locale: Locale,
) => {
	const parseYMD = (s: string) =>
		startOfDay(parse(s, 'yyyy/MM/dd', new Date()));

	const start = parseYMD(startStr);

	const end = endStr ? parseYMD(endStr) : new Date();

	if (!isValid(start) || !isValid(end)) return '';

	const { years = 0, months = 0 } = intervalToDuration({ start, end });
	if (!years && !months) {
		const unit = formatDuration(
			{ months: 1 },
			{ locale, format: ['months'] },
		).replace(/^\s*1\s+/, ''); // "month" / "месяц" / "Monat" ...
		const isRu = locale?.code?.toLowerCase?.().startsWith('ru');
		return `<1\u00A0${isRu ? 'месяца' : unit}`;
	}

	return formatDuration(
		{ years, months },
		{ locale, format: ['years', 'months'] },
	);
};
