import '@testing-library/jest-dom';
import { i18n } from 'i18next';

jest.mock('i18next', () => {
	const use = jest.fn().mockReturnThis();
	const init = jest.fn().mockReturnThis();
	const changeLanguage = jest.fn().mockResolvedValue(undefined);
	return { __esModule: true, default: { use, init, changeLanguage } };
});

jest.mock('i18next-browser-languagedetector', () => ({
	__esModule: true,
	default: function LanguageDetector() {},
}));
jest.mock('react-i18next', () => ({
	initReactI18next: {}, // объект-плагин
}));

beforeEach(() => {
	jest.resetModules();
});

it('подключает LanguageDetector, initReactI18next и вызывает init с базовой конфигурацией', async () => {
	const i18next = (await import('i18next')).default as i18n;
	await import('@/app/modules/i18n'); // сам модуль инициализации

	expect(i18next.use).toHaveBeenNthCalledWith(1, expect.any(Function)); // LanguageDetector
	expect(i18next.use).toHaveBeenNthCalledWith(2, expect.any(Object)); // initReactI18next

	expect(i18next.init).toHaveBeenCalledWith(
		expect.objectContaining({
			fallbackLng: 'ru',
			supportedLngs: ['en', 'ru'],
			interpolation: expect.objectContaining({ escapeValue: false }),
			detection: expect.objectContaining({
				order: expect.arrayContaining([
					'cookie',
					'localStorage',
					'htmlTag',
					'path',
					'subdomain',
				]),
				caches: ['cookie'],
			}),
			resources: expect.objectContaining({
				ru: expect.any(Object),
				en: expect.any(Object),
			}),
		}),
	);
});
