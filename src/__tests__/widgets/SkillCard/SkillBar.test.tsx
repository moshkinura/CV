import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';

import SkillBar from '@/widgets/SkillCard/ui/SkillBar';

import type { TSkill } from '@/interfaces/skills.types';

const getBar = (container: HTMLElement) =>
	container.querySelector(
		'div.h-2.bg-secondary.rounded-full.overflow-hidden > div.h-full',
	) as HTMLDivElement;

describe('SkillBar', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});
	afterEach(() => {
		jest.useRealTimers();
	});

	it('рендерит имя и процент', () => {
		const skill: TSkill = { name: 'Node.js', percent: 75 };
		const { getByText } = render(<SkillBar skill={skill} isVisible={true} />);
		expect(getByText('Node.js')).toBeInTheDocument();
		expect(getByText('75%')).toBeInTheDocument();
	});

	it('анимирует ширину с 0% до percent через 200мс при isVisible=true', () => {
		const skill: TSkill = { name: 'NestJS', percent: 60 };
		const { container } = render(<SkillBar skill={skill} isVisible={true} />);
		const bar = getBar(container);

		expect(bar.style.width).toBe('0%');

		act(() => {
			jest.advanceTimersByTime(199);
		});
		expect(bar.style.width).toBe('0%');

		act(() => {
			jest.advanceTimersByTime(1);
		});
		expect(bar.style.width).toBe('60%');
	});

	it('не анимирует, если isVisible=false', () => {
		const skill: TSkill = { name: 'PostgreSQL', percent: 85 };
		const { container } = render(<SkillBar skill={skill} isVisible={false} />);
		const bar = getBar(container);

		act(() => {
			jest.advanceTimersByTime(500);
		});
		expect(bar.style.width).toBe('0%');
	});

	it('меняет ширину при обновлении percent (с задержкой 200мс)', () => {
		const skill: TSkill = { name: 'React', percent: 40 };
		const { container, rerender } = render(
			<SkillBar skill={skill} isVisible={true} />,
		);

		act(() => {
			jest.advanceTimersByTime(200);
		});
		let bar = getBar(container);
		expect(bar.style.width).toBe('40%');

		rerender(
			<SkillBar skill={{ name: 'React', percent: 72 }} isVisible={true} />,
		);
		act(() => {
			jest.advanceTimersByTime(200);
		});
		bar = getBar(container);
		expect(bar.style.width).toBe('72%');
	});

	describe('цвет прогресс-бара по порогам', () => {
		const renderAndGetClass = (percent: TSkill['percent']) => {
			const skill: TSkill = { name: 'X', percent };
			const { container } = render(<SkillBar skill={skill} isVisible={true} />);
			const bar = getBar(container);
			return bar.className;
		};

		it('>= 80 → bg-success', () => {
			expect(renderAndGetClass(80)).toMatch(/\bbg-success\b/);
			expect(renderAndGetClass(95)).toMatch(/\bbg-success\b/);
		});

		it('>= 60 и < 80 → bg-primary', () => {
			expect(renderAndGetClass(60)).toMatch(/\bbg-primary\b/);
			expect(renderAndGetClass(79)).toMatch(/\bbg-primary\b/);
		});

		it('>= 40 и < 60 → bg-warning', () => {
			expect(renderAndGetClass(40)).toMatch(/\bbg-warning\b/);
			expect(renderAndGetClass(59)).toMatch(/\bbg-warning\b/);
		});

		it('< 40 → bg-destructive', () => {
			expect(renderAndGetClass(0)).toMatch(/\bbg-destructive\b/);
			expect(renderAndGetClass(39)).toMatch(/\bbg-destructive\b/);
		});
	});
});
