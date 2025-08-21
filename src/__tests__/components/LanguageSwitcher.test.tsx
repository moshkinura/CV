import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ButtonHTMLAttributes, ReactNode, SVGProps } from 'react';

import LanguageSwitcher from '@/Components1/LanguageSwitcher';
import { ELanguage } from '@/interfaces/languagesI18N.interface';

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
	return { Languages: Icon('Languages') };
});

const changeLanguage = jest.fn();
let mockLang = 'ru';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		i18n: {
			language: mockLang,
			resolvedLanguage: mockLang,
			changeLanguage,
		},
	}),
}));

beforeEach(() => {
	changeLanguage.mockClear();
	mockLang = 'ru';
});

describe('LanguageSwitcher', () => {
	it('рендерит кнопку и показывает текущий язык (RU)', () => {
		render(<LanguageSwitcher />);

		const btn = screen.getByRole('button');
		expect(btn).toBeInTheDocument();

		expect(screen.getByText('RU')).toBeInTheDocument();

		expect(screen.getByTestId('icon-Languages')).toBeInTheDocument();
	});

	it('по клику переключает RU → EN', async () => {
		const user = userEvent.setup();
		render(<LanguageSwitcher />);

		await user.click(screen.getByRole('button'));
		expect(changeLanguage).toHaveBeenCalledWith(ELanguage.EN);
	});

	it('нормализует en-US и переключает EN → RU', async () => {
		mockLang = 'en-US';
		const user = userEvent.setup();
		render(<LanguageSwitcher />);

		expect(screen.getByText('EN')).toBeInTheDocument();
		await user.click(screen.getByRole('button'));
		expect(changeLanguage).toHaveBeenCalledWith(ELanguage.RU);
	});
});
