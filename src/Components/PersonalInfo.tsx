import {
	BadgeCheck,
	Calendar,
	Clock,
	FileText,
	Flag,
	GraduationCap,
	Heart,
	Info,
	Languages,
	Monitor,
	User,
} from 'lucide-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/shared/ui/badge';
import { Card } from '@/shared/ui/card';
import { formatBirthday } from '@/shared/utils/formatBirthday.utils';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';

import { TPersonals } from '@/interfaces/personals.types';

const PersonalInfo: FC = () => {
	const { t, i18n } = useTranslation();
	const {
		title,
		description,
		personal,
		details,
		languages,
		shedules,
		employments,
		recommendations,
		configure,
	} = t('personals', {
		returnObjects: true,
	}) as TPersonals;

	const personalData = [
		{
			icon: Flag,
			name: personal.data.nationality.name,
			value: personal.data.nationality.value,
		},
		{
			icon: GraduationCap,
			name: personal.data.education.name,
			value: personal.data.education.value,
		},
		{
			icon: Calendar,
			name: personal.data.birthday.name,
			value: formatBirthday(
				personal.data.birthday.value,
				getDateFnsLocale(i18n.resolvedLanguage),
			),
		},
		{
			icon: User,
			name: personal.data.gender.name,
			value: personal.data.gender.value,
		},
		{
			icon: Heart,
			name: personal.data.marital.name,
			value: personal.data.marital.value,
		},
	];

	return (
		<section className='py-20 bg-linear-to-b from-background to-secondary/20'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gradient mb-4'>
						{title}
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{description}
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
					{/* Personal Details */}
					<Card className='glass-effect p-6 animate-slide-up'>
						<div className='flex items-center gap-3 mb-6'>
							<User className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{personal.title}</h3>
						</div>
						<div className='space-y-4'>
							{personalData.map((item, index) => (
								<div key={index} className='flex items-center gap-4'>
									<item.icon className='w-5 h-5 text-accent' />
									<div className='flex-1'>
										<span className='text-muted-foreground'>{item.name}:</span>
										<span className='ml-2 font-medium'>{item.value}</span>
									</div>
								</div>
							))}
						</div>
					</Card>

					{/* Additional Information */}
					<Card
						className='glass-effect p-6 animate-slide-up'
						style={{ animationDelay: '0.37s' }}
					>
						<div className='flex items-center gap-3 mb-6'>
							<Info className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{details.title}</h3>
						</div>
						<div className='space-y-4'>
							<div>
								<div className='text-sm text-muted-foreground font-medium mb-1'>
									{details.driver.name}
								</div>
								<div className='font-semibold text-foreground'>
									{details.driver.value}
								</div>
							</div>
							<div>
								<div className='text-sm text-muted-foreground font-medium mb-1'>
									{details.hobbies.name}
								</div>
								<div className='text-foreground'>{details.hobbies.value}</div>
							</div>
							<div>
								<div className='text-sm text-muted-foreground font-medium mb-2'>
									{details.qualities.name}
								</div>
								<div className='flex flex-wrap gap-2'>
									{details.qualities.value.map((q, idx) => (
										<Badge
											key={idx}
											variant='secondary'
											className='text-accent'
										>
											{q}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</Card>

					{/* Languages */}
					<Card
						className='glass-effect p-6 animate-slide-up'
						style={{ animationDelay: '0.1s' }}
					>
						<div className='flex items-center gap-3 mb-6'>
							<Languages className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{languages.title}</h3>
						</div>
						<div className='space-y-4'>
							{languages.language.map((lang, index) => (
								<div key={index} className='space-y-2'>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>{lang.name}</span>
										<Badge variant='outline'>{lang.level}</Badge>
									</div>
									<div className='h-2 bg-secondary rounded-full overflow-hidden'>
										<div
											className='h-full bg-primary transition-all duration-1000 ease-out'
											style={{ width: `${lang.percent}%` }}
										/>
									</div>
									<div className='text-right text-sm text-muted-foreground'>
										{lang.percent}%
									</div>
								</div>
							))}
						</div>
					</Card>

					{/* Work Schedule */}
					<Card
						className='glass-effect p-6 animate-slide-up'
						style={{ animationDelay: '0.2s' }}
					>
						<div className='flex items-center gap-3 mb-6'>
							<Clock className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{shedules.title}</h3>
						</div>
						<div className='flex flex-wrap gap-2'>
							{shedules.shedule.map((schedule, index) => (
								<Badge key={index} variant='secondary' className='text-accent'>
									{schedule}
								</Badge>
							))}
						</div>
					</Card>

					{/* Employment Options */}
					<Card
						className='glass-effect p-6 animate-slide-up'
						style={{ animationDelay: '0.3s' }}
					>
						<div className='flex items-center gap-3 mb-6'>
							<FileText className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{employments.title}</h3>
						</div>
						<div className='flex flex-wrap gap-2 mb-10'>
							{employments.employment.map((option, index) => (
								<Badge key={index} variant='secondary' className='text-success'>
									{option}
								</Badge>
							))}
						</div>
					</Card>

					{/* Recommendations */}
					<Card
						className='glass-effect p-6 animate-slide-up'
						style={{ animationDelay: '0.3s' }}
					>
						<div className='flex items-center gap-3 mb-4'>
							<BadgeCheck className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{recommendations.title}</h3>
						</div>
						<p className='text-muted-foreground'>
							{recommendations.information}
						</p>
						<p className='text-sm text-muted-foreground mt-2'>
							{recommendations.note}
						</p>
					</Card>

					{/* Computer Specifications */}
					<Card
						className='glass-effect p-6 lg:col-span-2 animate-slide-up'
						style={{ animationDelay: '0.4s' }}
					>
						<div className='flex items-center gap-3 mb-6'>
							<Monitor className='w-6 h-6 text-primary' />
							<h3 className='text-xl font-semibold'>{configure.title}</h3>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{configure.elements.map((spec, index) => (
								<div key={index} className='bg-secondary/50 rounded-lg p-4'>
									<div className='text-sm text-muted-foreground font-medium mb-1'>
										{spec.component}
									</div>
									<div className='font-semibold text-foreground'>
										{spec.spec}
									</div>
								</div>
							))}
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default PersonalInfo;
