import { TNameAndValue } from './NameAndValue.types';
import { TConfigure } from './configure.types';
import { TDetails } from './details.types';
import { TEmployments } from './employments.types';
import { TLanguages } from './languages.types';
import { TRecommendations } from './recommendations.types';
import { TShedules } from './shedules.types';

export type TPersonal = {
	title: string;
	data: {
		nationality: TNameAndValue;
		education: TNameAndValue;
		birthday: TNameAndValue;
		gender: TNameAndValue;
		marital: TNameAndValue;
	};
};

export type TPersonals = {
	title: string;
	description: string;
	personal: TPersonal;
	details: TDetails;
	languages: TLanguages;
	shedules: TShedules;
	employments: TEmployments;
	recommendations: TRecommendations;
	configure: TConfigure;
};
