import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import SkillCard from '@/widgets/SkillCard/SkillCard';

import type { TSkillsCategory } from '@/interfaces/skills.types';

jest.mock('@/shared/ui/card', () => ({
	__esModule: true,
	Card: ({
		children,
		...rest
	}: { children?: ReactNode } & HTMLAttributes<HTMLDivElement>) => (
		<div data-testid='card' {...rest}>
			{children}
		</div>
	),
}));

jest.mock('@/shared/ui/badge', () => ({
	__esModule: true,
	Badge: ({
		children,
		...rest
	}: { children?: ReactNode } & HTMLAttributes<HTMLSpanElement>) => (
		<span data-testid='badge' {...rest}>
			{children}
		</span>
	),
}));

jest.mock('@/widgets/SkillCard/ui/SkillBar', () => ({
	__esModule: true,
	default: ({ isVisible }: { skill: unknown; isVisible: boolean }) => (
		<div data-testid='skill-bar' data-visible={String(isVisible)} />
	),
}));

describe('SkillCard', () => {
	const category = {
		name: 'Backend',
		data: [
			{ name: 'Node.js', percent: 90 },
			{ name: 'NestJS', percent: 85 },
			{ name: 'PostgreSQL', percent: 80 },
		],
	} as unknown as TSkillsCategory;

	it('рендерит название категории в бэйдже', () => {
		render(<SkillCard index={2} isVisible={true} category={category} />);
		expect(screen.getByTestId('badge')).toHaveTextContent('Backend');
	});

	it('рендерит SkillBar по количеству элементов category.data и пробрасывает isVisible', () => {
		render(<SkillCard index={0} isVisible={true} category={category} />);
		const bars = screen.getAllByTestId('skill-bar');
		expect(bars).toHaveLength(category.data.length);
		bars.forEach(b => expect(b).toHaveAttribute('data-visible', 'true'));
	});

	it('пробрасывает isVisible=false в SkillBar', () => {
		render(<SkillCard index={1} isVisible={false} category={category} />);
		const bars = screen.getAllByTestId('skill-bar');
		bars.forEach(b => expect(b).toHaveAttribute('data-visible', 'false'));
	});

	it('проставляет корректную задержку анимации и классы на Card', () => {
		const idx = 3;
		render(<SkillCard index={idx} isVisible={true} category={category} />);
		const card = screen.getByTestId('card') as HTMLDivElement;

		expect(card).toHaveClass(
			'glass-effect',
			'p-6',
			'transition-all',
			'duration-500',
			'hover:shadow-glow',
			'animate-slide-up',
		);

		const delayNum = parseFloat(card.style.animationDelay); // '0.30000000000000004s' -> 0.30000000000000004
		expect(delayNum).toBeCloseTo(idx * 0.1, 6);
	});
});
