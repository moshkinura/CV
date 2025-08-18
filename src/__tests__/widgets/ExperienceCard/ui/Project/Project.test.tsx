import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { SVGProps } from 'react';

import Project from '@/widgets/ExperienceCard/ui/Project/Project';

import type { TWorkExpirienceProject } from '@/interfaces/expirience.types';

jest.mock('lucide-react', () => ({
	Zap: (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid='icon-Zap' {...props} />
	),
}));

jest.mock('@/widgets/ExperienceCard/ui/Project/ui/Responsibilities', () => ({
	__esModule: true,
	default: ({
		responsibilityText,
		responsibilities,
	}: {
		responsibilityText: string;
		responsibilities: string[];
	}) => (
		<div
			data-testid='responsibilities'
			data-title={responsibilityText}
			data-items={responsibilities.join('|')}
		/>
	),
}));

jest.mock('@/widgets/ExperienceCard/ui/Project/ui/Technologies', () => ({
	__esModule: true,
	default: ({
		technologiesText,
		technologies,
	}: {
		technologiesText: string;
		technologies: string[];
	}) => (
		<div
			data-testid='technologies'
			data-title={technologiesText}
			data-items={technologies.join('|')}
		/>
	),
}));

describe('Project', () => {
	const project: TWorkExpirienceProject = {
		name: 'Payments Platform',
		description: 'Высоконагруженная платёжная платформа',
		responsibilities: [
			'Проектирование API',
			'Координация релизов',
			'Код-ревью',
		],
		technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'Kafka'],
	};

	const responsibilityText = 'Обязанности';
	const technologiesText = 'Технологии';

	it('рендерит заголовок, описание и иконку', () => {
		const { container } = render(
			<Project
				project={project}
				responsibilityText={responsibilityText}
				technologiesText={technologiesText}
			/>,
		);

		expect(
			screen.getByRole('heading', { name: project.name }),
		).toBeInTheDocument();
		expect(screen.getByText(project.description)).toBeInTheDocument();
		expect(screen.getByTestId('icon-Zap')).toBeInTheDocument();

		const root = container.querySelector('.border-l-4.border-accent.pl-6');
		expect(root).toBeInTheDocument();
	});

	it('пробрасывает пропсы в Responsibilities и Technologies', () => {
		render(
			<Project
				project={project}
				responsibilityText={responsibilityText}
				technologiesText={technologiesText}
			/>,
		);

		const resp = screen.getByTestId('responsibilities');
		expect(resp).toHaveAttribute('data-title', responsibilityText);
		expect(resp).toHaveAttribute(
			'data-items',
			project.responsibilities.join('|'),
		);

		const tech = screen.getByTestId('technologies');
		expect(tech).toHaveAttribute('data-title', technologiesText);
		expect(tech).toHaveAttribute('data-items', project.technologies.join('|'));
	});
});
