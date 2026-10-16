import { render, screen } from '@testing-library/react';

import CyberHero from '@/components/CyberHero';

jest.mock('@/shared/assets/merged.webm', () => ({
	__esModule: true,
	default: 'mock-animation.webm',
}));

jest.mock('@/widgets/Contacts/Contacts', () => ({
	__esModule: true,
	default: ({ variant }: { variant: string }) => (
		<div data-testid={`Contacts-${variant}`} />
	),
}));

const bioMock = {
	fio: 'Иванов Иван',
	position: 'Senior Developer',
	geo: 'Москва',
};

const skillsMock = {
	title: 'Навыки',
	description: '',
	disclamer: '',
	categories: {
		lang: {
			name: 'Языки',
			data: [
				{ name: 'Node', percent: 90 },
				{ name: 'Go', percent: 15 },
			],
		},
		back: {
			name: 'Backend',
			data: [
				{ name: 'Nest', percent: 95 },
				{ name: 'Node', percent: 70 },
			],
		},
	},
};

const personalsMock = {
	personal: {
		title: 'Личные данные',
		data: {
			nationality: { name: 'Гражданство', value: 'РФ' },
			education: { name: 'Образование', value: 'Высшее' },
			birthday: { name: 'Дата рождения', value: '1997/02/25' },
			gender: { name: 'Пол', value: 'Мужской' },
			marital: { name: 'Семейное положение', value: 'Женат' },
		},
	},
};

let skillsValue: unknown = skillsMock;
let personalsValue: unknown = personalsMock;

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, opts?: { returnObjects?: boolean }) => {
			if (key === 'bio' && opts?.returnObjects) return bioMock;
			if (key === 'skills' && opts?.returnObjects) return skillsValue;
			if (key === 'personals' && opts?.returnObjects) return personalsValue;
			return key;
		},
		i18n: { resolvedLanguage: 'ru-RU' },
	}),
}));

describe('CyberHero', () => {
	beforeEach(() => {
		skillsValue = skillsMock;
		personalsValue = personalsMock;
	});

	it('рендерит имя, должность, гео, терминал и контакты', () => {
		render(<CyberHero salaryTitle='Зарплата:' salaryText='от 100' />);

		expect(screen.getByText(bioMock.fio)).toBeInTheDocument();
		expect(screen.getByText(bioMock.position)).toBeInTheDocument();
		expect(screen.getByText(bioMock.geo)).toBeInTheDocument();
		expect(screen.getByText('Nest, Node, Go')).toBeInTheDocument();
		expect(screen.getByText('Зарплата: от 100')).toBeInTheDocument();
		expect(screen.getByTestId('Contacts-short')).toBeInTheDocument();
	});

	it('показывает личные данные', () => {
		render(<CyberHero salaryTitle='' salaryText='' />);

		expect(
			screen.getByRole('group', { name: personalsMock.personal.title }),
		).toBeInTheDocument();
		expect(screen.getByText('Гражданство')).toBeInTheDocument();
		expect(screen.getByText('РФ')).toBeInTheDocument();
		expect(screen.getByText(/25\.02\.1997/)).toBeInTheDocument();
	});

	it('не падает, если переводы отсутствуют', () => {
		skillsValue = 'skills';
		personalsValue = 'personals';
		render(<CyberHero salaryTitle='' salaryText='' />);

		expect(screen.queryAllByRole('definition')).toHaveLength(0);
		expect(screen.getByRole('group', { name: 'personal' })).toBeInTheDocument();
	});
});
