import { FC, useEffect, useState } from 'react';

import { useTranslation } from '@/shared/i18n/useTranslation';
import {
	isCyberDisclaimerSeen,
	useCyberTheme,
} from '@/shared/theme/CyberThemeProvider';
import { Button } from '@/shared/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/shared/ui/dialog';

import LanguageSwitcher from '@/components/LanguageSwitcher';

const DISCLAIMER_DELAY_MS = 1000;

const CyberDisclaimer: FC = () => {
	const { t } = useTranslation();
	const { chooseTheme } = useCyberTheme();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (isCyberDisclaimerSeen()) return;

		const timer = window.setTimeout(() => {
			if (isCyberDisclaimerSeen()) return;
			setOpen(true);
		}, DISCLAIMER_DELAY_MS);

		return () => window.clearTimeout(timer);
	}, []);

	const stay = () => {
		chooseTheme('cyber');
		setOpen(false);
	};

	const switchToBusiness = () => {
		chooseTheme('default');
		setOpen(false);
	};

	return (
		<Dialog open={open}>
			<DialogContent
				className='[&>button]:hidden'
				onPointerDownOutside={event => event.preventDefault()}
				onEscapeKeyDown={event => event.preventDefault()}
			>
				<DialogHeader className='flex-row items-start justify-between gap-3 space-y-0 text-left'>
					<div className='space-y-1.5'>
						<DialogTitle>{t('cyberDisclaimer.title')}</DialogTitle>
						<DialogDescription>{t('cyberDisclaimer.body')}</DialogDescription>
					</div>
					<LanguageSwitcher />
				</DialogHeader>
				<DialogFooter className='gap-2 sm:flex-col sm:space-x-0'>
					<Button
						type='button'
						className='h-auto w-full whitespace-normal py-3'
						onClick={stay}
					>
						{t('cyberDisclaimer.stay')}
					</Button>
					<Button
						type='button'
						variant='outline'
						className='h-auto w-full whitespace-normal py-3'
						onClick={switchToBusiness}
					>
						{t('cyberDisclaimer.business')}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default CyberDisclaimer;
