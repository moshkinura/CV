import { CalendarDays, MapPin } from 'lucide-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/shared/ui/badge';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';

import { calculateExperience } from '../model/calculateExperience.utils';
import { formatDate } from '../model/formatDate.utils';

import {
	TExpirience,
	TWorkExpirienceData,
} from '@/interfaces/expirience.types';

interface Props {
	experience: TWorkExpirienceData;
}

const HeaderCard: FC<Props> = ({ experience }) => {
	const { i18n, t } = useTranslation();
	const locale = getDateFnsLocale(i18n.resolvedLanguage);
	const textExperience = calculateExperience(experience.period, locale);

	const { now } = t('experience', { returnObjects: true }) as TExpirience;

	return (
		<>
			{/* Company and Position */}
			<div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6'>
				<div className='space-y-2'>
					<h3 className='text-2xl font-bold text-gradient'>
						{experience.company}
					</h3>
					<h4 className='text-xl font-semibold text-primary'>
						{experience.position}
					</h4>
				</div>
				<Badge
					variant='secondary'
					className='self-start bg-primary/10 text-primary border-primary/20'
				>
					<CalendarDays className='w-4 h-4 mr-2' />
					{textExperience}
				</Badge>
			</div>

			{/* Location and Period */}
			<div className='flex flex-wrap gap-4 text-muted-foreground mb-8'>
				<div className='flex items-center gap-2'>
					<MapPin className='w-4 h-4' />
					<span>{experience.location}</span>
				</div>
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-4 h-4' />
					<span>{formatDate(experience.period, now)}</span>
				</div>
			</div>
		</>
	);
};
export default HeaderCard;
