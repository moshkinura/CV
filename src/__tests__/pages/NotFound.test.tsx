import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NotFound from '@/pages/NotFound';

describe('NotFound', () => {
	let errorSpy: jest.SpyInstance;

	beforeEach(() => {
		errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
	});

	afterEach(() => {
		errorSpy.mockRestore();
	});

	it('рендерит 404, сообщение и ссылку домой', () => {
		render(
			<MemoryRouter initialEntries={['/missing-route']}>
				<NotFound />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole('heading', { level: 1, name: '404' }),
		).toBeInTheDocument();
		expect(screen.getByText('Oops! Page not found')).toBeInTheDocument();

		const link = screen.getByRole('link', { name: 'Return to Home' });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/');
	});

	it('логирует 404 с путём из location', async () => {
		const path = '/deep/unknown/page';
		render(
			<MemoryRouter initialEntries={[path]}>
				<NotFound />
			</MemoryRouter>,
		);

		await waitFor(() => {
			expect(errorSpy).toHaveBeenCalledWith(
				'404 Error: User attempted to access non-existent route:',
				path,
			);
		});
	});
});
