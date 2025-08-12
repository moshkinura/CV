import type { Locale } from 'date-fns';
import { de, enUS, es, fr, ru } from 'date-fns/locale';

export const getDateFnsLocale = (lng: string): Locale => {
	const l = lng.toLowerCase();
	if (l.startsWith('ru')) return ru;
	if (l.startsWith('en')) return enUS;
	// if (l.startsWith('de')) return de;
	// if (l.startsWith('fr')) return fr;
	// if (l.startsWith('es')) return es;
	return ru;
};
