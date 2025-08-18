import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Index from '@/pages/Index';

jest.mock('@/components/LanguageSwitcher', () => ({
	__esModule: true,
	default: () => <div data-testid='LanguageSwitcher' />,
}));
jest.mock('@/components/Hero', () => ({
	__esModule: true,
	default: () => <div data-testid='Hero' />,
}));
jest.mock('@/components/SkillsSection', () => ({
	__esModule: true,
	default: () => <div data-testid='SkillsSection' />,
}));
jest.mock('@/components/ExperienceSection', () => ({
	__esModule: true,
	default: () => <div data-testid='ExperienceSection' />,
}));
jest.mock('@/components/PersonalInfo', () => ({
	__esModule: true,
	default: () => <div data-testid='PersonalInfo' />,
}));
jest.mock('@/components/ContactSection', () => ({
	__esModule: true,
	default: () => <div data-testid='ContactSection' />,
}));

describe('Index page', () => {
	it('рендерит контейнер и все секции', () => {
		const { container } = render(<Index />);

		const root = container.querySelector('div.min-h-screen') as HTMLDivElement;
		expect(root).toBeInTheDocument();

		const ids = [
			'LanguageSwitcher',
			'Hero',
			'SkillsSection',
			'ExperienceSection',
			'PersonalInfo',
			'ContactSection',
		] as const;

		ids.forEach(id => {
			expect(screen.getByTestId(id)).toBeInTheDocument();
		});

		const nodes = Array.from(root.querySelectorAll('[data-testid]'));
		const positions = ids.map(id => nodes.indexOf(screen.getByTestId(id)));
		const sorted = [...positions].sort((a, b) => a - b);
		expect(positions).toEqual(sorted);
	});
});
