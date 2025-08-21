import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import ContactSection from '../../components/ContactSection';

// ---- Моки i18n ----
const contactsMock = {
	title: 'Связаться со мной',
	subtitle: 'Готов обсудить возможности или просто пообщаться?',
};

const ctaMock = {
	title: 'Напишите мне прямо сейчас',
	subtitle: 'Отвечу в ближайшее время',
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'contacts' && opts?.returnObjects) return contactsMock;
			if (key === 'cta' && opts?.returnObjects) return ctaMock;
			return key;
		},
	}),
}));

jest.mock('@/widgets/Contacts/Contacts', () => ({
	__esModule: true,
	default: ({ variant }: { variant: 'card' | 'cta' | string }) => (
		<div data-testid={`contacts-${variant}`} data-variant={variant} />
	),
}));

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

describe('ContactSection', () => {
	it('рендерит заголовок и подзаголовок секции', () => {
		render(<ContactSection />);
		expect(
			screen.getByRole('heading', { name: contactsMock.title }),
		).toBeInTheDocument();
		expect(screen.getByText(contactsMock.subtitle)).toBeInTheDocument();
	});

	it('рендерит Contacts с variant="card"', () => {
		render(<ContactSection />);
		const cardContacts = screen.getByTestId('contacts-card');
		expect(cardContacts).toBeInTheDocument();
		expect(cardContacts).toHaveAttribute('data-variant', 'card');
	});

	it('рендерит CTA-блок с текстами и Contacts с variant="cta"', () => {
		render(<ContactSection />);

		expect(
			screen.getByRole('heading', { name: ctaMock.title }),
		).toBeInTheDocument();
		expect(screen.getByText(ctaMock.subtitle)).toBeInTheDocument();

		const ctaContacts = screen.getByTestId('contacts-cta');
		expect(ctaContacts).toBeInTheDocument();
		expect(ctaContacts).toHaveAttribute('data-variant', 'cta');
	});
});
