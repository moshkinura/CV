import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LanguageSwitcher from '@/components/LanguageSwitcher';

let mockLanguage = 'ru';
const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		i18n: {
			language: mockLanguage,
			changeLanguage: mockChangeLanguage,
		},
	}),
}));

describe('LanguageSwitcher', () => {
	beforeEach(() => {
		mockLanguage = 'ru';
		mockChangeLanguage.mockClear();
	});

	it('рендерит текущий язык (в верхнем регистре)', () => {
		render(<LanguageSwitcher />);
		expect(screen.getByRole('button', { name: /ru/i })).toBeInTheDocument();
	});

	it('по клику переключает ru → en', async () => {
		render(<LanguageSwitcher />);
		await userEvent.click(screen.getByRole('button', { name: /ru/i }));
		expect(mockChangeLanguage).toHaveBeenCalledWith('en');
	});

	it('по клику переключает en → ru', async () => {
		mockLanguage = 'en';
		render(<LanguageSwitcher />);
		await userEvent.click(screen.getByRole('button', { name: /en/i }));
		expect(mockChangeLanguage).toHaveBeenCalledWith('ru');
	});
});
