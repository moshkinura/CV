import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode } from 'react';

import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';
import { getTotalExperienceText } from '@/shared/utils/getTotalExperience.utils';

import ExperienceSection from '@/components/ExperienceSection';

// ---- Моки данных i18n ----
const experienceMock = {
	responsibility: 'Обязанности',
	technologies: 'Технологии',
	total: {
		title: 'Итого опыт',
		description: 'Суммарный опыт за всё время',
	},
	main: {
		title: 'Опыт работы',
		subtitle: 'Коротко о главном',
		data: [{ id: 1 }, { id: 2 }],
	},
};

// ---- Мок i18next ----
jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'experience' && opts?.returnObjects) return experienceMock;
			return key;
		},
		i18n: { resolvedLanguage: 'ru' },
	}),
}));

jest.mock('@/shared/utils/getDateFnsLocale.utils', () => ({
	getDateFnsLocale: jest.fn(() => 'ruLocale'),
}));

jest.mock('@/shared/utils/getTotalExperience.utils', () => ({
	getTotalExperienceText: jest.fn(() => '5 лет 3 месяца'),
}));

jest.mock('@/widgets/ExperienceCard/ExperienceCard', () => ({
	__esModule: true,
	default: (props: {
		experience: unknown;
		index: number;
		responsibilityText: string;
		technologiesText: string;
	}) => (
		<div
			data-testid='experience-card'
			data-index={String(props.index)}
			data-resp={props.responsibilityText}
			data-tech={props.technologiesText}
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

describe('ExperienceSection', () => {
	it('рендерит заголовок и подзаголовок', () => {
		render(<ExperienceSection />);
		expect(
			screen.getByRole('heading', { name: experienceMock.main.title }),
		).toBeInTheDocument();
		expect(screen.getByText(experienceMock.main.subtitle)).toBeInTheDocument();
	});

	it('показывает суммарный опыт и вызывает утилиты с корректными аргументами', () => {
		render(<ExperienceSection />);

		expect(screen.getByText(experienceMock.total.title)).toBeInTheDocument();
		expect(
			screen.getByText(experienceMock.total.description),
		).toBeInTheDocument();

		expect(screen.getByText('5 лет 3 месяца')).toBeInTheDocument();

		const mockedGetLocale = getDateFnsLocale as jest.MockedFunction<
			typeof getDateFnsLocale
		>;
		const mockedGetTotal = getTotalExperienceText as jest.MockedFunction<
			typeof getTotalExperienceText
		>;

		expect(mockedGetLocale).toHaveBeenCalledWith('ru');
		expect(mockedGetTotal).toHaveBeenCalledWith(
			experienceMock.main.data,
			'ruLocale',
		);
	});

	it('рендерит по карточке на каждый элемент main.data и пробрасывает тексты', () => {
		render(<ExperienceSection />);
		const cards = screen.getAllByTestId('experience-card');
		expect(cards).toHaveLength(experienceMock.main.data.length);

		expect(cards[0]).toHaveAttribute('data-index', '0');
		expect(cards[1]).toHaveAttribute('data-index', '1');

		cards.forEach(c => {
			expect(c).toHaveAttribute('data-resp', experienceMock.responsibility);
			expect(c).toHaveAttribute('data-tech', experienceMock.technologies);
		});
	});
});
