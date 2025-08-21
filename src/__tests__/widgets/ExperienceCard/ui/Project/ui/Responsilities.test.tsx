import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import type { SVGProps } from 'react';

import Responsibilities from '@/widgets/ExperienceCard/ui/Project/ui/Responsibilities';

jest.mock('lucide-react', () => ({
	Users: (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid='icon-Users' {...props} />
	),
}));

describe('Responsibilities', () => {
	const responsibilityText = 'Обязанности';
	const responsibilities = [
		'Проектирование API',
		'Код-ревью',
		'Наставничество',
	];

	it('рендерит заголовок и иконку', () => {
		render(
			<Responsibilities
				responsibilityText={responsibilityText}
				responsibilities={responsibilities}
			/>,
		);
		expect(
			screen.getByRole('heading', { name: responsibilityText, level: 6 }),
		).toBeInTheDocument();
		expect(screen.getByTestId('icon-Users')).toBeInTheDocument();
	});

	it('рендерит список всех пунктов с буллетами', () => {
		const { container } = render(
			<Responsibilities
				responsibilityText={responsibilityText}
				responsibilities={responsibilities}
			/>,
		);

		const list = screen.getByRole('list');
		const items = within(list).getAllByRole('listitem');
		expect(items).toHaveLength(responsibilities.length);

		responsibilities.forEach(text => {
			expect(screen.getByText(text)).toBeInTheDocument();
		});

		items.forEach(li => {
			const bullet = li.querySelector('div.bg-accent.rounded-full');
			expect(bullet).toBeInTheDocument();
			expect(bullet).toHaveClass('w-1.5', 'h-1.5', 'bg-accent', 'rounded-full');
		});

		expect(container.querySelector('.mb-4')).toBeInTheDocument();
	});
});
