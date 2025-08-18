import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import ExperienceCard from '@/widgets/ExperienceCard/ExperienceCard';

import type { TWorkExpirienceData } from '@/interfaces/expirience.types';

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

jest.mock('@/widgets/ExperienceCard/ui/HeaderCard', () => ({
	__esModule: true,
	default: (_props: { experience: TWorkExpirienceData }) => (
		<div data-testid='header-card' />
	),
}));

jest.mock('@/widgets/ExperienceCard/ui/Project/Project', () => ({
	__esModule: true,
	default: (props: {
		project: unknown;
		responsibilityText: string;
		technologiesText: string;
	}) => (
		<div
			data-testid='project'
			data-resp={props.responsibilityText}
			data-tech={props.technologiesText}
		/>
	),
}));

describe('ExperienceCard', () => {
	const experience = {
		company: 'ACME Corp',
		position: 'Senior Backend Engineer',
		period: ['2023/01/01', '2024/01/01'],
		projects: [
			{
				name: 'Project A',
				description: 'A',
				responsibilities: ['R1'],
				technologies: ['T1'],
			},
			{
				name: 'Project B',
				description: 'B',
				responsibilities: ['R2'],
				technologies: ['T2'],
			},
			{
				name: 'Project C',
				description: 'C',
				responsibilities: ['R3'],
				technologies: ['T3'],
			},
		],
	} as unknown as TWorkExpirienceData;

	const responsibilityText = 'Обязанности';
	const technologiesText = 'Технологии';

	it('рендерит HeaderCard и список Project по количеству проектов', () => {
		render(
			<ExperienceCard
				experience={experience}
				index={0}
				responsibilityText={responsibilityText}
				technologiesText={technologiesText}
			/>,
		);

		expect(screen.getByTestId('header-card')).toBeInTheDocument();

		const projects = screen.getAllByTestId('project');
		expect(projects).toHaveLength(experience.projects.length);
		projects.forEach(p => {
			expect(p).toHaveAttribute('data-resp', responsibilityText);
			expect(p).toHaveAttribute('data-tech', technologiesText);
		});
	});

	it('добавляет нужные классы на Card', () => {
		render(
			<ExperienceCard
				experience={experience}
				index={1}
				responsibilityText={responsibilityText}
				technologiesText={technologiesText}
			/>,
		);
		const card = screen.getByTestId('card');
		expect(card).toHaveClass(
			'glass-effect',
			'p-8',
			'transition-all',
			'duration-500',
			'hover:shadow-glow',
			'animate-slide-up',
			'border-2',
		);
	});

	it('ставит корректную задержку анимации (animationDelay = index * 0.2s)', () => {
		const idx = 3;
		render(
			<ExperienceCard
				experience={experience}
				index={idx}
				responsibilityText={responsibilityText}
				technologiesText={technologiesText}
			/>,
		);
		const card = screen.getByTestId('card') as HTMLDivElement;

		const delayNum = parseFloat(card.style.animationDelay); // "0.6000000000000001s" -> 0.6000000000000001
		expect(delayNum).toBeCloseTo(idx * 0.2, 6);
	});
});
