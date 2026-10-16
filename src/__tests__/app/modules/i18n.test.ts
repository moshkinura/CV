import '@testing-library/jest-dom';

beforeEach(() => {
	jest.resetModules();
	document.cookie = 'i18next=;path=/;max-age=0';
	localStorage.clear();
	document.documentElement.lang = '';
});

it('поднимает словари ru/en и берёт язык из cookie', async () => {
	document.cookie = 'i18next=en;path=/';

	const { getLanguage, select, setLanguage, t } =
		await import('@itcamel/text-kit');
	const { persistLanguage } = await import('@/app/modules/i18n');

	expect(getLanguage()).toBe('en');
	expect(t('nav.home')).toBe('Home');
	expect(select<{ fio?: string }>('bio')?.fio).toEqual(expect.any(String));

	setLanguage(persistLanguage('ru'));
	expect(getLanguage()).toBe('ru');
	expect(t('nav.home')).toBe('Главная');
	expect(document.documentElement.lang).toBe('ru');
	expect(document.cookie).toContain('i18next=ru');
});
