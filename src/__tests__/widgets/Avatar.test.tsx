import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Avatar from '@/widgets/Avatar/Avatar';

jest.mock('@/shared/assets/photo.jpg', () => ({
	__esModule: true,
	default: 'mock-photo.jpg',
}));

describe('Avatar', () => {
	it('рендерит img с корректными alt и src', () => {
		render(<Avatar />);
		const img = screen.getByAltText('Photo') as HTMLImageElement;

		expect(img).toBeInTheDocument();
		expect(img.getAttribute('src')).toBe('mock-photo.jpg');
		expect(img).toHaveClass('w-full', 'h-full', 'object-cover');
	});

	it('рендерит индикатор онлайн', () => {
		const { container } = render(<Avatar />);
		const indicator = container.querySelector('.bg-success.rounded-full');
		expect(indicator).toBeInTheDocument();
	});

	it('оборачивает картинку в круглой обложке с тенью', () => {
		const { container } = render(<Avatar />);
		const wrapper = container.querySelector('.shadow-glow');
		expect(wrapper).toBeInTheDocument();
		expect(wrapper).toHaveClass('rounded-full', 'overflow-hidden');
	});
});
