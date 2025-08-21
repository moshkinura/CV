import { TNameAndValue } from './NameAndValue.types';

export type TDetails = {
	title: string;
	driver: TNameAndValue;
	hobbies: TNameAndValue;
	qualities: TQualities;
};

export type TQualities = {
	name: string;
	value: string[];
};
