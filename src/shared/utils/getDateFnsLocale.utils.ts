import type { Locale } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';

export const getDateFnsLocale = (lng: string): Locale => {
	const l = lng.toLowerCase();
	if (l.startsWith('ru')) return ru;
	if (l.startsWith('en')) return enUS;
	return ru;
};
