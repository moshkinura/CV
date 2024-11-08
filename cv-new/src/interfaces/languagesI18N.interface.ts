export enum ELanguage {
	EN = 'en',
	RU = 'ru',
}
export type TLangEN = {
	code: ELanguage.EN;
	country_code: ELanguage.EN;
	name: 'English';
};

export type TLangRU = {
	code: ELanguage.RU;
	country_code: ELanguage.RU;
	name: 'Русский';
};

export type TLanguagesI18N = TLangEN | TLangRU;
