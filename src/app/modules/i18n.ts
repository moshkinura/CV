import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import LOCALE_EN from '@/locales/en/translation.json';
import LOCALE_RU from '@/locales/ru/translation.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			ru: {
				translation: LOCALE_RU,
			},
			en: {
				translation: LOCALE_EN,
			},
		},
		supportedLngs: ['en', 'ru'],
		fallbackLng: 'ru',
		detection: {
			order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
			caches: ['cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
