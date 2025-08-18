import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { SVGProps } from 'react';

import Hero from '@/components/Hero';

// Моки данных i18n
const bioMock = {
	fio: 'Мошкин Юрий Алексеевич',
	position: 'Senior NODE.JS backend developer',
	geo: 'КУЗБАСС, г.Юрга (возможны командировки)',
};

const payMock = {
	title: 'Желаемая зарплата',
	from: 'от',
	rub: '300000₽',
	usd: '$3300',
	eur: '€3150',
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

jest.mock('@/widgets/Avatar/Avatar', () => ({
	__esModule: true,
	default: () => <div data-testid='avatar' />,
}));

jest.mock('@/widgets/Contacts/Contacts', () => ({
	__esModule: true,
	default: (props: { variant?: 'short' | 'full' | string }) => (
		<div data-testid='contacts' data-variant={props.variant} />
	),
}));

jest.mock('@/widgets/TypingText/TypingText', () => ({
	__esModule: true,
	default: ({ text }: { text: string }) => (
		<span data-testid='typing-text'>{text}</span>
	),
}));

jest.mock('lucide-react', () => ({
	MapPin: (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid='map-pin' {...props} />
	),
}));

describe('Hero', () => {
	it('рендерит ФИО и аватар', () => {
		render(<Hero />);
		expect(
			screen.getByRole('heading', { name: bioMock.fio }),
		).toBeInTheDocument();
		expect(screen.getByTestId('avatar')).toBeInTheDocument();
	});

	it('показывает должность через TypingText', () => {
		render(<Hero />);
		expect(screen.getByTestId('typing-text')).toHaveTextContent(
			bioMock.position,
		);
	});

	it('показывает гео и иконку местоположения', () => {
		render(<Hero />);
		expect(screen.getByText(bioMock.geo)).toBeInTheDocument();
		expect(screen.getByTestId('map-pin')).toBeInTheDocument();
	});

	it('показывает блок зарплаты и все валюты', () => {
		render(<Hero />);
		expect(screen.getByText(payMock.title)).toBeInTheDocument();
		const salaryLine = screen.getByText((_, node) => {
			const text = node?.textContent ?? '';
			return (
				text.startsWith(payMock.from) &&
				text.includes(payMock.rub) &&
				text.includes(payMock.usd) &&
				text.includes(payMock.eur)
			);
		});
		expect(salaryLine).toBeInTheDocument();
	});

	it('рендерит Contacts с variant="short"', () => {
		render(<Hero />);
		const contacts = screen.getByTestId('contacts');
		expect(contacts).toBeInTheDocument();
		expect(contacts).toHaveAttribute('data-variant', 'short');
	});
});
