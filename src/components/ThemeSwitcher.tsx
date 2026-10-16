import { Cpu } from 'lucide-react';
import { FC } from 'react';

import { useTranslation } from '@/shared/i18n/useTranslation';
import { useCyberTheme } from '@/shared/theme/CyberThemeProvider';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn.utils';

const ThemeSwitcher: FC = () => {
	const { t } = useTranslation();
	const { enabled, toggle } = useCyberTheme();
	const label = enabled ? t('nav.cyberOff') : t('nav.cyberOn');

	return (
		<Button
			variant='ghost'
			size='sm'
			type='button'
			onClick={toggle}
			aria-pressed={enabled}
			aria-label={label}
			title={label}
			className={cn(
				'border border-primary/20 transition-smooth hover:border-primary/40',
				enabled && 'border-primary text-primary shadow-glow',
			)}
		>
			<Cpu className='w-4 h-4' aria-hidden='true' />
		</Button>
	);
};

export default ThemeSwitcher;
