import { type TextTree, initTextKit } from '@itcamel/text-kit';

import LOCALE_EN from '@/locales/en/translation.json';
import LOCALE_RU from '@/locales/ru/translation.json';

const LANGUAGE_COOKIE = 'i18next';
const LANGUAGE_STORAGE_KEY = 'i18nextLng';

const normalizeLanguage = (value: string | null | undefined): 'ru' | 'en' =>
	value?.toLowerCase().startsWith('en') ? 'en' : 'ru';

const readCookie = (name: string): string | null => {
	if (typeof document === 'undefined') return null;

	const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : null;
};

export const detectLanguage = (): 'ru' | 'en' => {
	const fromCookie = readCookie(LANGUAGE_COOKIE);
	const fromStorage =
		typeof localStorage === 'undefined'
			? null
			: localStorage.getItem(LANGUAGE_STORAGE_KEY);
	const fromHtml =
		typeof document === 'undefined' ? null : document.documentElement.lang;

	return normalizeLanguage(fromCookie || fromStorage || fromHtml || 'ru');
};

export const persistLanguage = (language: string): 'ru' | 'en' => {
	const next = normalizeLanguage(language);

	if (typeof document !== 'undefined') {
		document.cookie = `${LANGUAGE_COOKIE}=${next};path=/;max-age=31536000`;
		document.documentElement.lang = next;
	}

	return next;
};

const language = detectLanguage();

initTextKit({
	locales: {
		ru: LOCALE_RU as TextTree,
		en: LOCALE_EN as TextTree,
	},
	language,
	fallbackLanguage: 'ru',
});

if (typeof document !== 'undefined') {
	document.documentElement.lang = language;
}
