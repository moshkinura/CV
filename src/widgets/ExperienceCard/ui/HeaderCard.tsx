import { CalendarDays, MapPin } from 'lucide-react';
import { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { TWorkExpirienceData } from '@/interfaces/expirience.types';

const calculateExperience = (startDate: string, endDate: string): number => {
	const start = new Date(startDate);
	const end = endDate === null ? new Date() : new Date(endDate);
	const diffTime = Math.abs(end.getTime() - start.getTime());
	const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
	return Math.round(diffYears * 10) / 10; // округляем до 1 знака
};

const formatExperience = (years: number): string => {
	if (years < 1) {
		const months = Math.round(years * 12);
		return `${months} месяцев`;
	}
	return `${years} лет`;
};

interface Props {
	experience: TWorkExpirienceData;
}
const HeaderCard: FC<Props> = ({ experience }) => {
	const experienceYears = calculateExperience(
		experience.period[0],
		experience.period[1],
	);

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
					{formatExperience(experienceYears)}
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
					<span>{`${experience.period[0]} - ${experience.period[1] || 'Настоящее время'}`}</span>
				</div>
			</div>
		</>
	);
};
export default HeaderCard;
