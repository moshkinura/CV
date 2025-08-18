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

describe('Index (lazy sections + Suspense)', () => {
	it('рендерит LanguageSwitcher и Hero сразу, а секции появляются (lazy) позже', async () => {
		const { container } = render(<Index />);

		const root = container.querySelector('div.min-h-screen');
		expect(root).toBeInTheDocument();

		expect(screen.getByTestId('LanguageSwitcher')).toBeInTheDocument();
		expect(screen.getByTestId('Hero')).toBeInTheDocument();

		expect(await screen.findByTestId('SkillsSection')).toBeInTheDocument();
		expect(await screen.findByTestId('ExperienceSection')).toBeInTheDocument();
		expect(await screen.findByTestId('PersonalInfo')).toBeInTheDocument();
		expect(await screen.findByTestId('ContactSection')).toBeInTheDocument();

		const ids = [
			'LanguageSwitcher',
			'Hero',
			'SkillsSection',
			'ExperienceSection',
			'PersonalInfo',
			'ContactSection',
		] as const;

		const nodes = Array.from(root!.querySelectorAll('[data-testid]'));
		const positions = ids.map(id => nodes.indexOf(screen.getByTestId(id)));
		const sorted = [...positions].sort((a, b) => a - b);
		expect(positions).toEqual(sorted);
	});
});
