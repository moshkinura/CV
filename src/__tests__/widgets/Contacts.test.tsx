import '@testing-library/jest-dom';
import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type {
	ButtonHTMLAttributes,
	HTMLAttributes,
	ReactNode,
	SVGProps,
} from 'react';

import Contacts from '@/widgets/Contacts/Contacts';

// ---- Моки i18n ----
const contactsMock = {
	title: 'Contacts',
	subtitle: 'Ping me anytime',
	copy: 'Copy',
	sendEmail: 'Send Email',
	sendTelegram: 'Send Telegram',
	phone: { name: 'Phone', value: '+79001001010' },
	email: { name: 'Email', value: 'dev@example.com' },
	telegram: { name: 'Telegram', value: 'yura_dev' },
	github: { name: 'GitHub', value: 'yura-dev' },
	gitlab: { name: 'GitLab', value: 'yura-dev' },
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'contacts' && opts?.returnObjects) return contactsMock;
			if (key === 'cta' && opts?.returnObjects) {
				return { title: 'Reach out', subtitle: 'I usually reply fast' };
			}
			return key;
		},
	}),
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

jest.mock('@/shared/ui/button', () => ({
	__esModule: true,
	Button: ({
		children,
		asChild,
		...rest
	}: {
		children?: ReactNode;
		asChild?: boolean;
	} & ButtonHTMLAttributes<HTMLButtonElement>) =>
		asChild ? <>{children}</> : <button {...rest}>{children}</button>,
}));

jest.mock('lucide-react', () => {
	const Icon = (name: string) => (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid={`icon-${name}`} {...props} />
	);
	return {
		Phone: Icon('Phone'),
		Mail: Icon('Mail'),
		Send: Icon('Send'),
		Github: Icon('Github'),
		Gitlab: Icon('Gitlab'),
		Copy: Icon('Copy'),
		CheckCircle: Icon('CheckCircle'),
		ExternalLink: Icon('ExternalLink'),
	};
});

beforeEach(() => {
	jest.useRealTimers();
	const writeText = jest.fn().mockResolvedValue(undefined);
	try {
		Object.defineProperty(window.navigator, 'clipboard', {
			configurable: true,
			value: { writeText },
		});
	} catch {
		(window.navigator as any).clipboard = { writeText };
	}
});

describe('Contacts (variant="short")', () => {
	it('рендерит 5 ссылок с корректными href', () => {
		render(<Contacts variant='short' />);

		const phoneLink = screen.getByRole('link', {
			name: `${contactsMock.phone.name}: ${contactsMock.phone.value}`,
		});
		const emailLink = screen.getByRole('link', {
			name: `${contactsMock.email.name}: ${contactsMock.email.value}`,
		});
		const tgLink = screen.getByRole('link', {
			name: `${contactsMock.telegram.name}: @${contactsMock.telegram.value}`,
		});
		const ghLink = screen.getByRole('link', {
			name: `${contactsMock.github.name}: @${contactsMock.github.value}`,
		});
		const glLink = screen.getByRole('link', {
			name: `${contactsMock.gitlab.name}: @${contactsMock.gitlab.value}`,
		});

		expect(phoneLink).toHaveAttribute(
			'href',
			`tel:${contactsMock.phone.value}`,
		);
		expect(emailLink).toHaveAttribute(
			'href',
			`mailto:${contactsMock.email.value}`,
		);
		expect(tgLink).toHaveAttribute(
			'href',
			`https://t.me/${contactsMock.telegram.value}`,
		);
		expect(ghLink).toHaveAttribute(
			'href',
			`https://github.com/${contactsMock.github.value}`,
		);
		expect(glLink).toHaveAttribute(
			'href',
			`https://gitlab.com/${contactsMock.gitlab.value}`,
		);
	});
});

describe('Contacts (variant="card")', () => {
	it('по клику на Copy показывает индикатор и возвращает текст через 2с', async () => {
		jest.useFakeTimers();
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

		render(<Contacts variant='card' />);

		const phoneHeading = screen.getByRole('heading', {
			name: contactsMock.phone.name,
		});
		const phoneCard = phoneHeading.closest(
			'[data-testid="card"]',
		) as HTMLElement;

		const copyBtn = within(phoneCard).getByRole('button', {
			name: `Copy ${contactsMock.phone.name}: ${contactsMock.phone.value}`,
		});
		await user.click(copyBtn);

		await waitFor(() => {
			expect(
				within(phoneCard).getByTestId('icon-CheckCircle'),
			).toBeInTheDocument();
		});

		await act(async () => {
			jest.advanceTimersByTime(2000);
		});
		expect(
			within(phoneCard).getByRole('button', {
				name: `Copy ${contactsMock.phone.name}: ${contactsMock.phone.value}`,
			}),
		).toBeInTheDocument();

		jest.useRealTimers();
	});

	it('внешняя ссылка у social открывается в новой вкладке', () => {
		render(<Contacts variant='card' />);

		const ghHeading = screen.getByRole('heading', {
			name: contactsMock.github.name,
		});
		const ghCard = ghHeading.closest('[data-testid="card"]') as HTMLElement;

		const socialLink = within(ghCard).getByRole('link');
		expect(socialLink).toHaveAttribute(
			'href',
			`https://github.com/${contactsMock.github.value}`,
		);
		expect(socialLink).toHaveAttribute('target', '_blank');
		expect(socialLink).toHaveAttribute('rel', 'noopener noreferrer');
	});

	it('внешняя ссылка у phone/email НЕ открывается в новой вкладке', () => {
		render(<Contacts variant='card' />);

		const emailHeading = screen.getByRole('heading', {
			name: contactsMock.email.name,
		});
		const emailCard = emailHeading.closest(
			'[data-testid="card"]',
		) as HTMLElement;

		const link = within(emailCard).getByRole('link');
		expect(link).toHaveAttribute('href', `mailto:${contactsMock.email.value}`);
		expect(link.getAttribute('target')).toBeNull();
		expect(link.getAttribute('rel')).toBeNull();
	});
});

describe('Contacts (variant="cta")', () => {
	it('рендерит CTA-кнопки Email и Telegram с корректными ссылками', () => {
		render(<Contacts variant='cta' />);

		const emailCta = screen.getByRole('link', { name: contactsMock.sendEmail });
		const tgCta = screen.getByRole('link', { name: contactsMock.sendTelegram });

		expect(emailCta).toHaveAttribute(
			'href',
			`mailto:${contactsMock.email.value}`,
		);
		expect(tgCta).toHaveAttribute(
			'href',
			`https://t.me/${contactsMock.telegram.value}`,
		);
	});
});
