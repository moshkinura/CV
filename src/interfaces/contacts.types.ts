import { TNameAndValue } from './NameAndValue.types';

export type TProtectedContact = {
	name: string;
	encoded: string;
};

export type TContacts = {
	title: string;
	subtitle: string;
	copy: string;
	copied: string;
	sendEmail: string;
	sendTelegram: string;
	phone: TProtectedContact;
	email: TProtectedContact;
	telegram: TNameAndValue;
	github: TNameAndValue;
	gitlab: TNameAndValue;
};
