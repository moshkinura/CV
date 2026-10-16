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

import { useCyberThemeEnabled } from '@/shared/theme/CyberThemeProvider';
import { Badge } from '@/shared/ui/badge';
import { Card } from '@/shared/ui/card';
import SectionHeading from '@/shared/ui/section-heading';
import { formatBirthday } from '@/shared/utils/formatBirthday.utils';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';

import { TPersonals } from '@/interfaces/personals.types';

const PersonalInfo: FC = () => {
	const { t, i18n } = useTranslation();
	// В cyber-режиме личные данные уже показаны в hero (personal.data) — карточку не дублируем
	const isCyber = useCyberThemeEnabled();
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
		<section
			id='personal'
			className='py-20 bg-linear-to-b from-background to-secondary/20'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<SectionHeading index='04' title={title} className='text-4xl' />
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{description}
					</p>
				</div>

				<div className='cyber-masonry grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
					{/* Personal Details */}
					{!isCyber && (
						<Card className='glass-effect hud-panel p-6 animate-slide-up'>
							<div className='flex items-center gap-3 mb-6'>
								<User className='w-6 h-6 text-primary' />
								<h3 className='text-xl font-semibold'>{personal.title}</h3>
							</div>
							<div className='space-y-4'>
								{personalData.map((item, index) => (
									<div key={index} className='flex items-center gap-4'>
										<item.icon className='w-5 h-5 text-accent' />
										<div className='flex-1'>
											<span className='text-muted-foreground'>
												{item.name}:
											</span>
											<span className='ml-2 font-medium'>{item.value}</span>
										</div>
									</div>
								))}
							</div>
						</Card>
					)}

					{/* Additional Information */}
					<Card
						className='glass-effect hud-panel p-6 animate-slide-up'
						style={{ animationDelay: '0.37s' }}
					>
						<div className='info-head flex items-center gap-3 mb-6'>
							<Info className='w-6 h-6 text-primary' />
							<h3
								className='cyber-relabel text-xl font-semibold'
								data-cyber={t('hud.profileAdditional')}
							>
								{details.title}
							</h3>
						</div>
						<div className='space-y-4'>
							<div className='info-row'>
								<div className='info-key text-sm text-muted-foreground font-medium mb-1'>
									{details.driver.name}
								</div>
								<div className='info-val font-semibold text-foreground'>
									{details.driver.value}
								</div>
							</div>
							<div className='info-row'>
								<div className='info-key text-sm text-muted-foreground font-medium mb-1'>
									{details.hobbies.name}
								</div>
								<div className='info-val text-foreground'>
									{details.hobbies.value}
								</div>
							</div>
							<div className='info-row'>
								<div className='info-key text-sm text-muted-foreground font-medium mb-2'>
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
						className='glass-effect hud-panel p-6 animate-slide-up'
						style={{ animationDelay: '0.1s' }}
					>
						<div className='info-head flex items-center gap-3 mb-6'>
							<Languages className='w-6 h-6 text-primary' />
							<h3
								className='cyber-relabel text-xl font-semibold'
								data-cyber={t('hud.profileLanguages')}
							>
								{languages.title}
							</h3>
						</div>
						<div className='space-y-4'>
							{languages.language.map((lang, index) => (
								<div key={index} className='info-lang space-y-2'>
									<div className='flex justify-start items-center'>
										<span className='info-key font-medium mr-2'>
											{lang.name}
										</span>
										<Badge variant='outline'>{lang.level}</Badge>
									</div>
								</div>
							))}
						</div>
					</Card>

					{/* Work Schedule */}
					<Card
						className='glass-effect hud-panel p-6 animate-slide-up'
						style={{ animationDelay: '0.2s' }}
					>
						<div className='info-head flex items-center gap-3 mb-6'>
							<Clock className='w-6 h-6 text-primary' />
							<h3
								className='cyber-relabel text-xl font-semibold'
								data-cyber={t('hud.profileSchedule')}
							>
								{shedules.title}
							</h3>
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
						className='glass-effect hud-panel p-6 animate-slide-up'
						style={{ animationDelay: '0.3s' }}
					>
						<div className='info-head flex items-center gap-3 mb-6'>
							<FileText className='w-6 h-6 text-primary' />
							<h3
								className='cyber-relabel text-xl font-semibold'
								data-cyber={t('hud.profileEmployment')}
							>
								{employments.title}
							</h3>
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
						className='glass-effect hud-panel info-reco p-6 animate-slide-up'
						style={{ animationDelay: '0.3s' }}
					>
						<div className='info-head flex items-center gap-3 mb-4'>
							<BadgeCheck className='w-6 h-6 text-primary' />
							<h3
								className='cyber-relabel text-xl font-semibold'
								data-cyber={t('hud.profileRecommendations')}
							>
								{recommendations.title}
							</h3>
						</div>
						<p className='info-text text-muted-foreground'>
							{recommendations.information}
						</p>
						<p className='info-note text-sm text-muted-foreground mt-2'>
							{recommendations.note}
						</p>
					</Card>

					{/* Computer Specifications */}
					<Card
						className='glass-effect hud-panel p-6 lg:col-span-2 animate-slide-up'
						style={{ animationDelay: '0.4s' }}
					>
						<div className='info-head flex items-center gap-3 mb-6'>
							<Monitor className='w-6 h-6 text-primary' />
							<h3
								className='cyber-relabel text-xl font-semibold'
								data-cyber={t('hud.profileHardware')}
							>
								{configure.title}
							</h3>
						</div>
						<div className='info-spec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{configure.elements.map((spec, index) => (
								<div
									key={index}
									className='info-spec bg-secondary/50 rounded-lg p-4'
								>
									<div className='info-key text-sm text-muted-foreground font-medium mb-1'>
										{spec.component}
									</div>
									<div className='info-val font-semibold text-foreground'>
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
