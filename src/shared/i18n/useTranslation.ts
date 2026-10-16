import {
	getLanguage,
	select,
	setLanguage,
	t as translate,
} from '@itcamel/text-kit';
import { useCallback, useSyncExternalStore } from 'react';

import { persistLanguage } from '@/app/modules/i18n';

type Translate = {
	(key: string, options: { returnObjects: true }): unknown;
	(key: string, options?: { returnObjects?: boolean }): string;
};

const listeners = new Set<() => void>();

let snapshot = {
	language: getLanguage(),
};

const subscribe = (listener: () => void) => {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
};

const getSnapshot = () => snapshot;

const publish = (language: string) => {
	if (snapshot.language === language) return;
	snapshot = { language };
	listeners.forEach(listener => listener());
};

export const useTranslation = () => {
	const { language } = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getSnapshot,
	);

	const t = useCallback(
		(key: string, options?: { returnObjects?: boolean }) => {
			if (options?.returnObjects) return select(key);

			const value = translate(key, undefined, { fallback: key });
			return typeof value === 'string' ? value : key;
		},
		[language],
	) as Translate;

	const changeLanguage = useCallback((next: string) => {
		const nextLanguage = persistLanguage(next);
		setLanguage(nextLanguage);
		publish(nextLanguage);
	}, []);

	return {
		t,
		i18n: {
			language,
			resolvedLanguage: language,
			changeLanguage,
		},
	};
};
