import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CyberThemeProvider, {
	CYBER_DISCLAIMER_STORAGE_KEY,
	VISUAL_THEME_STORAGE_KEY,
} from '@/shared/theme/CyberThemeProvider';

import CyberDisclaimer from '@/components/CyberDisclaimer';

const mockChangeLanguage = jest.fn();

jest.mock('@/shared/i18n/useTranslation', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
		i18n: {
			language: 'ru',
			resolvedLanguage: 'ru',
			changeLanguage: mockChangeLanguage,
		},
	}),
}));

const renderDisclaimer = () =>
	render(
		<CyberThemeProvider>
			<CyberDisclaimer />
		</CyberThemeProvider>,
	);

describe('CyberDisclaimer', () => {
	beforeEach(() => {
		jest.useFakeTimers();
		localStorage.clear();
		document.documentElement.classList.remove('cyber');
	});

	afterEach(() => {
		jest.useRealTimers();
		localStorage.clear();
		document.documentElement.classList.remove('cyber');
	});

	it('через секунду показывает дисклеймер кибер-темы', () => {
		renderDisclaimer();

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByText('cyberDisclaimer.body')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'RU' })).toBeInTheDocument();
	});

	it('переключает язык, не закрывая окно', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		renderDisclaimer();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		await user.click(screen.getByRole('button', { name: 'RU' }));

		expect(mockChangeLanguage).toHaveBeenCalledWith('en');
		expect(screen.getByRole('dialog')).toBeInTheDocument();
	});

	it('оставляет кибер-тему и больше не показывает окно', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		renderDisclaimer();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		await user.click(
			screen.getByRole('button', { name: 'cyberDisclaimer.stay' }),
		);

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		expect(localStorage.getItem(CYBER_DISCLAIMER_STORAGE_KEY)).toBe('1');
		expect(localStorage.getItem(VISUAL_THEME_STORAGE_KEY)).toBe('cyber');
		expect(document.documentElement).toHaveClass('cyber');
	});

	it('переключает на деловой стиль', async () => {
		const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
		renderDisclaimer();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		await user.click(
			screen.getByRole('button', { name: 'cyberDisclaimer.business' }),
		);

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		expect(localStorage.getItem(CYBER_DISCLAIMER_STORAGE_KEY)).toBe('1');
		expect(localStorage.getItem(VISUAL_THEME_STORAGE_KEY)).toBe('default');
		expect(document.documentElement).not.toHaveClass('cyber');
	});

	it('не открывается, если выбор уже сохранён', () => {
		localStorage.setItem(CYBER_DISCLAIMER_STORAGE_KEY, '1');
		renderDisclaimer();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});
});
