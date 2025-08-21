import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import type { HTMLAttributes, ReactNode, SVGProps } from 'react';

import { formatBirthday } from '@/shared/utils/formatBirthday.utils';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';

import PersonalInfo from '@/components/PersonalInfo';

// ---- Моки i18n-данных ----
const personalsMock = {
	title: 'Личная информация',
	description: 'Краткое описание персональных данных',
	personal: {
		title: 'Персональные данные',
		data: {
			nationality: { name: 'Гражданство', value: 'Россия' },
			education: { name: 'Образование', value: 'Высшее' },
			birthday: { name: 'Дата рождения', value: '1990-05-01' },
			gender: { name: 'Пол', value: 'Мужской' },
			marital: { name: 'Семейное положение', value: 'Женат' },
		},
	},
	details: {
		title: 'Дополнительно',
		driver: { name: 'Водительское удостоверение', value: 'B, стаж 10 лет' },
		hobbies: { name: 'Хобби', value: 'Плавание, гитара' },
		qualities: {
			name: 'Качества',
			value: ['Ответственный', 'Командный игрок'],
		},
	},
	languages: {
		title: 'Языки',
		language: [
			{ name: 'Русский', level: 'Native', percent: 100 },
			{ name: 'English', level: 'B2', percent: 85 },
		],
	},
	shedules: { title: 'График работы', shedule: ['Full-time', 'Remote'] },
	employments: { title: 'Занятость', employment: ['Contract', 'Part-time'] },
	recommendations: {
		title: 'Рекомендации',
		information: 'Доступны по запросу',
		note: 'Опиисание рекомендации',
	},
	configure: {
		title: 'Конфигурация ПК',
		elements: [
			{ component: 'CPU', spec: 'Ryzen 7' },
			{ component: 'RAM', spec: '32GB' },
			{ component: 'GPU', spec: 'RTX 4070' },
		],
	},
};

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'personals' && opts?.returnObjects) return personalsMock;
			return key;
		},
		i18n: { resolvedLanguage: 'ru' },
	}),
}));

jest.mock('@/shared/utils/getDateFnsLocale.utils', () => ({
	getDateFnsLocale: jest.fn(() => 'ruLocale'),
}));

jest.mock('@/shared/utils/formatBirthday.utils', () => ({
	formatBirthday: jest.fn(() => '01.05.1990'),
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

jest.mock('lucide-react', () => {
	const Icon = (name: string) => (props: SVGProps<SVGSVGElement>) => (
		<svg data-testid={`icon-${name}`} {...props} />
	);
	return {
		BadgeCheck: Icon('BadgeCheck'),
		Calendar: Icon('Calendar'),
		Clock: Icon('Clock'),
		FileText: Icon('FileText'),
		Flag: Icon('Flag'),
		GraduationCap: Icon('GraduationCap'),
		Heart: Icon('Heart'),
		Info: Icon('Info'),
		Languages: Icon('Languages'),
		Monitor: Icon('Monitor'),
		User: Icon('User'),
	};
});

describe('PersonalInfo', () => {
	it('рендерит заголовок и описание секции', () => {
		render(<PersonalInfo />);
		expect(
			screen.getByRole('heading', { name: personalsMock.title }),
		).toBeInTheDocument();
		expect(screen.getByText(personalsMock.description)).toBeInTheDocument();
	});

	it('рендерит персональные данные, включая отформатированную дату рождения', () => {
		render(<PersonalInfo />);
		// Заголовок блока
		expect(
			screen.getByRole('heading', { name: personalsMock.personal.title }),
		).toBeInTheDocument();
		// Пары "название: значение"
		expect(screen.getByText('Гражданство:')).toBeInTheDocument();
		expect(screen.getByText('Россия')).toBeInTheDocument();

		expect(screen.getByText('Образование:')).toBeInTheDocument();
		expect(screen.getByText('Высшее')).toBeInTheDocument();

		expect(screen.getByText('Дата рождения:')).toBeInTheDocument();
		expect(screen.getByText('01.05.1990')).toBeInTheDocument();

		expect(screen.getByText('Пол:')).toBeInTheDocument();
		expect(screen.getByText('Мужской')).toBeInTheDocument();

		expect(screen.getByText('Семейное положение:')).toBeInTheDocument();
		expect(screen.getByText('Женат')).toBeInTheDocument();

		expect(getDateFnsLocale).toHaveBeenCalledWith('ru');
		expect(formatBirthday).toHaveBeenCalledWith(
			personalsMock.personal.data.birthday.value,
			'ruLocale',
		);
	});

	it('рендерит блок "Дополнительно" с правами, хобби и качествами', () => {
		render(<PersonalInfo />);
		expect(
			screen.getByRole('heading', { name: personalsMock.details.title }),
		).toBeInTheDocument();

		expect(
			screen.getByText(personalsMock.details.driver.name),
		).toBeInTheDocument();
		expect(
			screen.getByText(personalsMock.details.driver.value),
		).toBeInTheDocument();

		expect(
			screen.getByText(personalsMock.details.hobbies.name),
		).toBeInTheDocument();
		expect(
			screen.getByText(personalsMock.details.hobbies.value),
		).toBeInTheDocument();

		expect(
			screen.getByText(personalsMock.details.qualities.name),
		).toBeInTheDocument();
		personalsMock.details.qualities.value.forEach(q => {
			expect(screen.getByText(q)).toBeInTheDocument();
		});
	});

	it('рендерит языки с уровнями и процентами', () => {
		render(<PersonalInfo />);
		expect(
			screen.getByRole('heading', { name: personalsMock.languages.title }),
		).toBeInTheDocument();

		personalsMock.languages.language.forEach(lang => {
			expect(screen.getByText(lang.name)).toBeInTheDocument();
			expect(screen.getByText(lang.level)).toBeInTheDocument();
			expect(screen.getByText(`${lang.percent}%`)).toBeInTheDocument();
		});
	});

	it('рендерит график работы и варианты занятости', () => {
		render(<PersonalInfo />);

		expect(
			screen.getByRole('heading', { name: personalsMock.shedules.title }),
		).toBeInTheDocument();
		personalsMock.shedules.shedule.forEach(s => {
			expect(screen.getByText(s)).toBeInTheDocument();
		});

		expect(
			screen.getByRole('heading', { name: personalsMock.employments.title }),
		).toBeInTheDocument();
		personalsMock.employments.employment.forEach(e => {
			expect(screen.getByText(e)).toBeInTheDocument();
		});
	});

	it('рендерит рекомендации', () => {
		render(<PersonalInfo />);
		expect(
			screen.getByRole('heading', {
				name: personalsMock.recommendations.title,
			}),
		).toBeInTheDocument();
		expect(
			screen.getByText(personalsMock.recommendations.information),
		).toBeInTheDocument();
		expect(
			screen.getByText(personalsMock.recommendations.note),
		).toBeInTheDocument();
	});

	it('рендерит конфигурацию ПК и элементы спецификаций', () => {
		render(<PersonalInfo />);
		expect(
			screen.getByRole('heading', { name: personalsMock.configure.title }),
		).toBeInTheDocument();

		personalsMock.configure.elements.forEach(spec => {
			expect(screen.getByText(spec.component)).toBeInTheDocument();
			expect(screen.getByText(spec.spec)).toBeInTheDocument();
		});
	});
});
