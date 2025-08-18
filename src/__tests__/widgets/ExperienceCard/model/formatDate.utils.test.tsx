import { formatDate } from '@/widgets/ExperienceCard/model/formatDate.utils';

describe('formatDate', () => {
	const NOW = '08.2025';

	it('возвращает пустую строку при невалидном старте', () => {
		expect(formatDate(['2024-01-01', null], NOW)).toBe('');
		expect(formatDate(['bad', '2025/01/01'], NOW)).toBe('');
	});

	it('открытый период: форматирует старт и подставляет now', () => {
		expect(formatDate(['2023/05/10', null], NOW)).toBe('05.2023 - 08.2025');
		expect(formatDate(['1999/01/01', null], NOW)).toBe('01.1999 - 08.2025');
	});

	it('валидный конец: форматирует обе даты', () => {
		expect(formatDate(['2022/12/01', '2023/07/15'], NOW)).toBe(
			'12.2022 - 07.2023',
		);
		expect(formatDate(['2020/01/31', '2020/10/01'], NOW)).toBe(
			'01.2020 - 10.2020',
		);
	});

	it('невалидный конец: использует now', () => {
		expect(formatDate(['2022/12/01', 'bad'], NOW)).toBe('12.2022 - 08.2025');
		expect(formatDate(['2024/02/10', '2024/02/30'], NOW)).toBe(
			'02.2024 - 08.2025',
		); // 30 Feb невалидна
	});
});
