import { UNumberRange } from './NumberRange.types';

export type TLanguages = {
	name: string;
	language: TLanguage[];
};

export type TLanguage = {
	name: string;
	percent: UNumberRange<0, 100>;
};
