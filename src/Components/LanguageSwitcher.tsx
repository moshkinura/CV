import { Languages } from 'lucide-react';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';

import { ELanguage } from '@/interfaces/languagesI18N.interface';

const LanguageSwitcher: FC = () => {
	const { i18n } = useTranslation();

	// Нормализуем язык (учтём en-US/ru-RU)
	const currentLang = useMemo<ELanguage>(() => {
		const l = (i18n.resolvedLanguage || i18n.language || '').toLowerCase();
		return l.startsWith('ru') ? ELanguage.RU : ELanguage.EN;
	}, [i18n.resolvedLanguage, i18n.language]) as ELanguage;

	const toggleLanguage = useCallback(() => {
		const next = currentLang === ELanguage.EN ? ELanguage.RU : ELanguage.EN;
		i18n.changeLanguage(next);
	}, [currentLang, i18n]);

	return (
		<Button
			variant='outline'
			size='sm'
			onClick={toggleLanguage}
			className='fixed top-6 right-6 z-50 glass-effect border-primary/20 hover:border-primary/40 transition-smooth'
		>
			<Languages className='w-4 h-4 mr-2' />
			<span className='font-semibold'>{currentLang.toUpperCase()}</span>
		</Button>
	);
};

export default LanguageSwitcher;
