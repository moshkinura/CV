import {
	addMonths,
	differenceInDays,
	differenceInMonths,
	formatDuration,
	isValid,
	parse,
} from 'date-fns';
import type { Locale } from 'date-fns';

type Period = readonly [string, string | null]; // 'yyyy/MM/dd'
type Item = { period: Period };

export const getTotalExperienceText = (
	items: Item[],
	locale: Locale,
): string => {
	const parseYMD = (s: string) => parse(s, 'yyyy/MM/dd', new Date());

	// валидные интервалы
	const intervals = items
		.map(({ period: [s, e] }) => ({
			start: parseYMD(s),
			end: e ? parseYMD(e) : new Date(),
		}))
		.filter(({ start, end }) => isValid(start) && isValid(end) && start <= end)
		.sort((a, b) => +a.start - +b.start);

	if (!intervals.length) return '';

	// merge пересекающихся/стыкующихся периодов
	const merged: { start: Date; end: Date }[] = [];
	for (const cur of intervals) {
		const last = merged[merged.length - 1];
		if (!last || cur.start > last.end) merged.push({ ...cur });
		else if (cur.end > last.end) last.end = cur.end;
	}

	// суммируем полные месяцы + остаточные дни
	let totalMonths = 0;
	let totalRemainderDays = 0;

	for (const { start, end } of merged) {
		const m = differenceInMonths(end, start); // полные календарные месяцы
		totalMonths += m;
		const afterM = addMonths(start, m);
		totalRemainderDays += differenceInDays(end, afterM); // остаточные дни
	}

	// округление: если остатка ~полмесяца и больше — добиваем месяц
	if (totalRemainderDays >= 15) totalMonths += 1;

	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	if (!years && !months) {
		// "<1 месяца" / "<1 month"
		const unit = formatDuration(
			{ months: 1 },
			{ locale, format: ['months'] },
		).replace(/^\s*1\s+/, '');
		const isRu = locale?.code?.toLowerCase?.().startsWith('ru');
		return `<1\u00A0${isRu ? 'месяца' : unit}`;
	}

	return formatDuration(
		{ years, months },
		{ locale, format: ['years', 'months'] },
	);
};
