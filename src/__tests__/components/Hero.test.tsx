import '@testing-library/jest-dom';
// ---- только теперь импортируем тестовые утилиты и сам компонент ----
import { render, screen, within } from '@testing-library/react';
import type { SVGProps } from 'react';

import Hero from '@/components/Hero';

// ---- моки зависимостей (до импорта компонента!) ----
jest.mock('@/widgets/Avatar/Avatar', () => ({
	__esModule: true,
	default: () => <div data-testid='Avatar' />,
}));

jest.mock('@/widgets/Contacts/Contacts', () => ({
	__esModule: true,
	default: ({ variant }: { variant: 'short' | 'card' | 'cta' }) => (
		<div data-testid={`Contacts-${variant}`} />
	),
}));

jest.mock('@/widgets/TypingText/TypingText', () => ({
	__esModule: true,
	default: ({ text }: { text: string }) => (
		<span data-testid='TypingText'>{text}</span>
	),
}));

jest.mock('lucide-react', () => {
	const Icon = (name: string) => (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid={`icon-${name}`} {...props} />
	);
	return { MapPin: Icon('MapPin') };
});

// ---- мок i18n ----
const bioMock = {
	fio: 'Мошкин Юрий Алексеевич',
	position: 'Senior NODE.JS backend developer',
	geo: 'КУЗБАСС, г.Юрга (возможны командировки)',
};
const payMock = {
	title: 'Ожидания по зарплате',
	from: 'от',
	rub: '300 000 ₽',
	usd: '$3,300',
	eur: '€3,000',
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'bio' && opts?.returnObjects) return bioMock;
			if (key === 'pay' && opts?.returnObjects) return payMock;
			return key;
		},
	}),
}));

// helper: нормализуем пробелы/nbsp
const normalize = (s: string) =>
	s
		.replace(/\u00A0/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

describe('Hero', () => {
	it('рендерит ФИО, должность, локацию, зарплату и контакты (variant="short")', () => {
		const { container } = render(<Hero />);

		const section = container.querySelector('section[role="banner"]');
		expect(section).toBeInTheDocument();
		expect(section).toHaveClass('min-h-[100svh]');

		// аватар (мок)
		expect(screen.getByTestId('Avatar')).toBeInTheDocument();

		// заголовок и должность
		expect(
			screen.getByRole('heading', { level: 1, name: bioMock.fio }),
		).toBeInTheDocument();
		expect(screen.getByTestId('TypingText')).toHaveTextContent(
			bioMock.position,
		);

		// локация с иконкой
		expect(screen.getByTestId('icon-MapPin')).toBeInTheDocument();
		expect(screen.getByText(bioMock.geo)).toBeInTheDocument();

		// зарплатный блок
		const salaryTitle = screen.getByText(payMock.title);
		const salaryCard = salaryTitle.closest('div')!;
		expect(salaryCard).toBeInTheDocument();

		// одна строка с тремя валютами — матчим по подстроке с нормализацией
		const hasText = (needle: string) =>
			within(salaryCard).getByText(content =>
				normalize(content).includes(normalize(needle)),
			);

		expect(hasText(payMock.rub)).toBeInTheDocument();
		expect(hasText(payMock.usd)).toBeInTheDocument();
		expect(hasText(payMock.eur)).toBeInTheDocument();

		// контакты
		expect(screen.getByTestId('Contacts-short')).toBeInTheDocument();
	});

	it('уважает prefers-reduced-motion: содержит motion-reduce классы', () => {
		const { container } = render(<Hero />);
		const animatedBlocks = container.querySelectorAll(
			'.motion-reduce\\:animate-none',
		);
		expect(animatedBlocks.length).toBeGreaterThanOrEqual(3);
	});

	it('overlay имеет pointer-events-none', () => {
		const { container } = render(<Hero />);
		const overlay = container.querySelector(
			'.gradient-hero.opacity-30.pointer-events-none',
		);
		expect(overlay).toBeInTheDocument();
	});
});
