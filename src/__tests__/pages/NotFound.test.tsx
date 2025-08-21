// src/__tests__/pages/NotFound.test.tsx
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ButtonHTMLAttributes, ReactNode, SVGProps } from 'react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import NotFound from '@/pages/NotFound';

// --- моки shadcn/ui ---
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

// --- моки иконок ---
jest.mock('lucide-react', () => {
	const Icon = (name: string) => (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid={`icon-${name}`} {...props} />
	);
	return {
		Home: Icon('Home'),
		ArrowLeft: Icon('ArrowLeft'),
		SearchX: Icon('SearchX'),
	};
});

// --- замокаем только useNavigate (остальное — реальное)
jest.mock('react-router-dom', () => {
	const actual = jest.requireActual('react-router-dom');
	return { __esModule: true, ...actual, useNavigate: jest.fn() };
});

describe('NotFound page', () => {
	const path = '/deep/unknown';

	let errorSpy: jest.SpyInstance;
	let navigateMock: jest.Mock;

	beforeEach(() => {
		errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
		navigateMock = jest.fn();
		(useNavigate as unknown as jest.Mock).mockReturnValue(navigateMock);
		document.title = '';
	});

	afterEach(() => {
		jest.clearAllMocks();
		jest.restoreAllMocks();
	});

	it('рендерит 404, текст и ссылку домой', () => {
		render(
			<MemoryRouter initialEntries={[path]}>
				<NotFound />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole('heading', { level: 1, name: '404' }),
		).toBeInTheDocument();
		expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
		expect(screen.getByText(path)).toBeInTheDocument();

		const homeLink = screen.getByRole('link', { name: /Return to Home/i });
		expect(homeLink).toHaveAttribute('href', '/CV');
	});

	it('логирует путь 404 и выставляет title', async () => {
		render(
			<MemoryRouter initialEntries={[path]}>
				<NotFound />
			</MemoryRouter>,
		);

		expect(errorSpy).toHaveBeenCalledWith(
			'404 Error: User attempted to access non-existent route:',
			path,
		);

		await waitFor(() => {
			expect(document.title).toBe('404 — Page not found');
		});
	});

	it('кнопка "Go back" вызывает navigate(-1)', async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter initialEntries={[path]}>
				<NotFound />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole('button', { name: /Go back/i }));
		expect(navigateMock).toHaveBeenCalledWith(-1);
	});
});
