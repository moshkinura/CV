import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { SVGProps } from 'react';

import CyberThemeProvider, {
	VISUAL_THEME_STORAGE_KEY,
} from '@/shared/theme/CyberThemeProvider';

import ThemeSwitcher from '@/components/ThemeSwitcher';

jest.mock('@/shared/i18n/useTranslation', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
	}),
}));

jest.mock('lucide-react', () => {
	const Icon = (name: string) => (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid={`icon-${name}`} {...props} />
	);
	return { Cpu: Icon('Cpu') };
});

const renderSwitcher = () =>
	render(
		<CyberThemeProvider>
			<ThemeSwitcher />
		</CyberThemeProvider>,
	);

describe('ThemeSwitcher', () => {
	beforeEach(() => {
		localStorage.clear();
		document.documentElement.classList.remove('cyber');
		let meta = document.querySelector('meta[name="theme-color"]');
		if (!meta) {
			meta = document.createElement('meta');
			meta.setAttribute('name', 'theme-color');
			document.head.appendChild(meta);
		}
		meta.setAttribute('content', '#ffffff');
	});

	afterEach(() => {
		localStorage.clear();
		document.documentElement.classList.remove('cyber');
	});

	it('включает и выключает класс cyber и пишет выбор в localStorage', async () => {
		const user = userEvent.setup();
		renderSwitcher();

		const button = screen.getByRole('button', { name: 'nav.cyberOn' });
		expect(button).toHaveAttribute('aria-pressed', 'false');
		expect(document.documentElement).not.toHaveClass('cyber');

		await user.click(button);

		expect(document.documentElement).toHaveClass('cyber');
		expect(localStorage.getItem(VISUAL_THEME_STORAGE_KEY)).toBe('cyber');
		expect(
			screen.getByRole('button', { name: 'nav.cyberOff' }),
		).toHaveAttribute('aria-pressed', 'true');
		expect(
			document
				.querySelector('meta[name="theme-color"]')
				?.getAttribute('content'),
		).toBe('#05080c');

		await user.click(screen.getByRole('button', { name: 'nav.cyberOff' }));

		expect(document.documentElement).not.toHaveClass('cyber');
		expect(localStorage.getItem(VISUAL_THEME_STORAGE_KEY)).toBe('default');
		expect(
			document
				.querySelector('meta[name="theme-color"]')
				?.getAttribute('content'),
		).toBe('#ffffff');
	});
});
