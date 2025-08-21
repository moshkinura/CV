import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import type { HTMLAttributes, ReactNode, SVGProps } from 'react';

import HeaderCard from '@/widgets/ExperienceCard/ui/HeaderCard';

import type {
	TExpirience,
	TWorkExpirienceData,
} from '@/interfaces/expirience.types';

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

jest.mock('lucide-react', () => {
	const Icon = (name: string) => (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid={`icon-${name}`} {...props} />
	);
	return {
		CalendarDays: Icon('CalendarDays'),
		MapPin: Icon('MapPin'),
	};
});

const mockLocale = {} as unknown as Intl.Locale;
const mockCalc = '2 years 3 months';
const mockPeriod = '05.2023 - 08.2025';

jest.mock('@/shared/utils/getDateFnsLocale.utils', () => ({
	getDateFnsLocale: jest.fn(() => mockLocale),
}));
jest.mock('@/widgets/ExperienceCard/model/calculateExperience.utils', () => ({
	calculateExperience: jest.fn(() => mockCalc),
}));
jest.mock('@/widgets/ExperienceCard/model/formatDate.utils', () => ({
	formatDate: jest.fn(() => mockPeriod),
}));

// --- Мок i18n ---
const i18nMock = { resolvedLanguage: 'en-US' };
const expDict: TExpirience = {
	now: '08.2025',
	responsibility: 'Responsibilities',
	technologies: 'Technologies',
	total: { title: 'Total', description: 'Desc' },
	main: { title: 'Title', subtitle: 'Sub', data: [] },
	more: { title: 'Title2', subtitle: 'Sub2', data: [] },
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		i18n: i18nMock,
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'experience' && opts?.returnObjects) return expDict;
			return key;
		},
	}),
}));

describe('HeaderCard', () => {
	const experience: TWorkExpirienceData = {
		company: 'ACME Corp',
		position: 'Senior Backend Engineer',
		location: 'Berlin, DE',
		period: ['2023/05/18', '2025/08/18'],
		projects: [],
	};

	it('рендерит компанию, позицию, локацию и период', () => {
		render(<HeaderCard experience={experience} />);

		expect(
			screen.getByRole('heading', { name: experience.company, level: 3 }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: experience.position, level: 4 }),
		).toBeInTheDocument();

		expect(screen.getByTestId('icon-MapPin')).toBeInTheDocument();
		expect(screen.getByText(experience.location)).toBeInTheDocument();

		expect(screen.getByText(mockPeriod)).toBeInTheDocument();
	});

	it('показывает бейдж с рассчитанным стажем и иконкой календаря', () => {
		render(<HeaderCard experience={experience} />);

		const badge = screen.getByTestId('badge');
		expect(badge).toBeInTheDocument();
		expect(within(badge).getByTestId('icon-CalendarDays')).toBeInTheDocument();
		expect(badge).toHaveTextContent(mockCalc);
	});

	it('вызывает утилиты с корректными аргументами', () => {
		const { getDateFnsLocale } = jest.requireMock(
			'@/shared/utils/getDateFnsLocale.utils',
		) as { getDateFnsLocale: (lng: string) => unknown };
		const { calculateExperience } = jest.requireMock(
			'@/widgets/ExperienceCard/model/calculateExperience.utils',
		) as {
			calculateExperience: (
				p: TWorkExpirienceData['period'],
				locale: unknown,
			) => string;
		};
		const { formatDate } = jest.requireMock(
			'@/widgets/ExperienceCard/model/formatDate.utils',
		) as {
			formatDate: (p: TWorkExpirienceData['period'], now: string) => string;
		};

		render(<HeaderCard experience={experience} />);

		expect(getDateFnsLocale).toHaveBeenCalledWith('en-US');
		expect(calculateExperience).toHaveBeenCalledWith(
			experience.period,
			mockLocale,
		);
		expect(formatDate).toHaveBeenCalledWith(experience.period, expDict.now);
	});
});
