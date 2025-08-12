export const getDuration = ([startRaw, endRaw]: [string, string | null]) => {
	const toDate = (d: string) => new Date(d);

	const start = toDate(startRaw);
	const end = endRaw ? toDate(endRaw) : new Date();

	if (isNaN(+start) || isNaN(+end)) throw new Error('Invalid Date');

	// гарантируем порядок
	let a = start,
		b = end;
	if (a > b) [a, b] = [b, a];

	// срезаем время до полуночи UTC (без проблем с часовыми/DST)
	const A = new Date(
		Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()),
	);
	const B = new Date(
		Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()),
	);

	// календарная разница: годы/месяцы/дни (остаточные)
	let years = B.getUTCFullYear() - A.getUTCFullYear();
	let months = B.getUTCMonth() - A.getUTCMonth();
	let days = B.getUTCDate() - A.getUTCDate();

	if (days < 0) {
		const lastDayPrevMonth = new Date(
			Date.UTC(B.getUTCFullYear(), B.getUTCMonth(), 0),
		).getUTCDate();
		days += lastDayPrevMonth;
		months -= 1;
	}
	if (months < 0) {
		months += 12;
		years -= 1;
	}

	const totalDays = Math.floor((+B - +A) / 86_400_000);

	return {
		years,
		months,
		days,
		total: totalDays,
	};
};
