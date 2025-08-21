import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import SkillsSection from '@/components/SkillsSection';

// ---- Моки i18n-данных ----
const skillsMock = {
	title: 'Навыки',
	description: 'Краткое описание навыков',
	disclamer: 'Дисклеймер о наборе навыков',
	categories: {
		frontend: { title: 'Frontend' },
		backend: { title: 'Backend' },
	},
};

const learnsMock = {
	title: 'Хочу прокачать',
	learn: [{ name: 'Kubernetes' }, { name: 'Rust' }, { name: 'Go' }],
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'skills' && opts?.returnObjects) return skillsMock;
			if (key === 'learns' && opts?.returnObjects) return learnsMock;
			return key;
		},
	}),
}));

jest.mock('@/widgets/SkillCard/SkillCard', () => ({
	__esModule: true,
	default: (props: {
		index: number;
		category: unknown;
		isVisible: boolean;
	}) => (
		<div
			data-testid='skill-card'
			data-index={String(props.index)}
			data-visible={String(props.isVisible)}
		/>
	),
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

jest.mock('@/shared/ui/badge', () => ({
	__esModule: true,
	Badge: ({
		children,
		...rest
	}: { children?: ReactNode } & HTMLAttributes<HTMLSpanElement>) => (
		<span data-testid='badge' {...rest}>
			{children}
		</span>
	),
}));

class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | Document | null = null;
	readonly rootMargin: string = '0px';
	readonly thresholds: ReadonlyArray<number> = [0];

	constructor(
		private readonly callback: IntersectionObserverCallback,
		_options?: IntersectionObserverInit,
	) {}

	observe = (target: Element): void => {
		const rect = target.getBoundingClientRect();
		const entry = {
			isIntersecting: true,
			target,
			intersectionRatio: 1,
			time: 0,
			boundingClientRect: rect,
			intersectionRect: rect,
			rootBounds: null,
		} as unknown as IntersectionObserverEntry;

		this.callback([entry], this);
	};

	unobserve = (_target: Element): void => {};
	disconnect = (): void => {};
	takeRecords = (): IntersectionObserverEntry[] => [];
}

beforeAll(() => {
	Object.defineProperty(window, 'IntersectionObserver', {
		writable: true,
		configurable: true,
		value: MockIntersectionObserver,
	});
});

describe('SkillsSection', () => {
	it('рендерит заголовок, описание и дисклеймер', () => {
		render(<SkillsSection />);
		expect(
			screen.getByRole('heading', { name: skillsMock.title }),
		).toBeInTheDocument();
		expect(screen.getByText(skillsMock.description)).toBeInTheDocument();
		expect(screen.getByText(skillsMock.disclamer)).toBeInTheDocument();
	});

	it('рендерит карточки категорий и передаёт isVisible=true после пересечения', () => {
		render(<SkillsSection />);
		const cards = screen.getAllByTestId('skill-card');
		expect(cards).toHaveLength(Object.keys(skillsMock.categories).length);
		cards.forEach(c => {
			expect(c).toHaveAttribute('data-visible', 'true');
		});
	});

	it('рендерит блок обучения с заголовком и бэйджами', () => {
		render(<SkillsSection />);
		expect(
			screen.getByRole('heading', { name: learnsMock.title }),
		).toBeInTheDocument();

		const badges = screen.getAllByTestId('badge');
		expect(badges).toHaveLength(learnsMock.learn.length);

		learnsMock.learn.forEach(({ name }) => {
			expect(screen.getByText(name)).toBeInTheDocument();
		});
	});
});
