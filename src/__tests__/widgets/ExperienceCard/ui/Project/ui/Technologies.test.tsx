import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import Technologies from '@/widgets/ExperienceCard/ui/Project/ui/Technologies';

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

describe('Technologies', () => {
	const title = 'Технологии';
	const techs = ['Node.js', 'NestJS', 'PostgreSQL', 'Kafka'];

	it('рендерит заголовок (h6) и список бэйджей', () => {
		render(<Technologies technologiesText={title} technologies={techs} />);

		expect(
			screen.getByRole('heading', { level: 6, name: title }),
		).toBeInTheDocument();

		const badges = screen.getAllByTestId('badge');
		expect(badges).toHaveLength(techs.length);

		techs.forEach(t => {
			expect(screen.getByText(t)).toBeInTheDocument();
		});
	});

	it('бэйджи имеют нужные классы оформления', () => {
		const { container } = render(
			<Technologies technologiesText={title} technologies={techs} />,
		);

		const wrap = container.querySelector('.flex.flex-wrap.gap-2');
		expect(wrap).toBeInTheDocument();

		const badges = screen.getAllByTestId('badge');
		badges.forEach(b => {
			expect(b).toHaveClass(
				'text-primary',
				'border-primary/30',
				'bg-primary/5',
			);
		});
	});
});
