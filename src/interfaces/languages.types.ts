import { UNumberRange } from './NumberRange.types';

export type TLanguages = {
	title: string;
	language: TLanguage[];
};

export type TLanguage = {
	name: string;
	level: string;
	percent: UNumberRange<0, 100>;
};
