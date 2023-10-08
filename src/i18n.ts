import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import LOCALE_EN from './Locales/en/translation.json';
import LOCALE_RU from './Locales/ru/translation.json';

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
    // debug: true,
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
