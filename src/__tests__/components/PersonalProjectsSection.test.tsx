import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import PersonalProjectsSection from '@/components/PersonalProjectsSection';
import type { TPortfolio } from '@/interfaces/portfolio.types';

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
	Badge: ({ children }: { children?: ReactNode }) => <span>{children}</span>,
}));

jest.mock('@/shared/ui/button', () => ({
	__esModule: true,
	Button: ({
		children,
		asChild,
	}: {
		children?: ReactNode;
		asChild?: boolean;
	}) => (asChild ? <>{children}</> : <button>{children}</button>),
}));

const portfolioMock: TPortfolio = {
	title: 'Личные проекты',
	description: 'Публичные проекты',
	technologies: 'Технологии',
	items: [
		{
			name: 'Сайт-резюме',
			description: 'Одностраничное резюме',
			technologies: ['React', 'Vite'],
			links: [{ name: 'Сайт', url: 'https://example.com/cv' }],
		},
		{
			name: 'camel-logger',
			description: 'Файловый логгер',
			technologies: ['Node.js'],
			links: [{ name: 'GitHub', url: 'https://example.com/logger' }],
			screenshots: [{ src: '/shots/logger.png', alt: 'Окно логгера' }],
		},
	],
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'portfolio' && opts?.returnObjects) return portfolioMock;
			return key;
		},
	}),
}));

describe('PersonalProjectsSection', () => {
	it('показывает описание, ссылку и скриншот только у проекта, где он задан', () => {
		render(<PersonalProjectsSection />);

		expect(
			screen.getByRole('heading', { level: 2, name: portfolioMock.title }),
		).toBeInTheDocument();
		expect(screen.getByText('Одностраничное резюме')).toBeInTheDocument();
		expect(
			screen.queryByRole('img', { name: 'Окно логгера' }),
		).toBeInTheDocument();
		expect(screen.getAllByRole('img')).toHaveLength(1);
		expect(screen.getByRole('link', { name: 'Сайт' })).toHaveAttribute(
			'href',
			'https://example.com/cv',
		);
	});
});
