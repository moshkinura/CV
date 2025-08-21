import { TNameAndValue } from './NameAndValue.types';

export type TContacts = {
	title: string;
	subtitle: string;
	copy: string;
	copied: string;
	sendEmail: string;
	sendTelegram: string;
	phone: TNameAndValue;
	email: TNameAndValue;
	telegram: TNameAndValue;
	github: TNameAndValue;
	gitlab: TNameAndValue;
};
