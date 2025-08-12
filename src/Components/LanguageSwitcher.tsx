import { Languages } from 'lucide-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { ELanguage } from '@/interfaces/languagesI18N.interface';

const LanguageSwitcher: FC = () => {
	const { i18n } = useTranslation();

	const currentLang = i18n.language as ELanguage;

	const toggleLanguage = () => {
		const newLang = currentLang === ELanguage.EN ? ELanguage.RU : ELanguage.EN;
		i18n.changeLanguage(newLang);
	};

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
