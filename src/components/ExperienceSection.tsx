import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ExperienceCard from '@/widgets/ExperienceCard/ExperienceCard';

import { Card } from '@/shared/ui/card';
import SectionHeading from '@/shared/ui/section-heading';
import { Separator } from '@/shared/ui/separator';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';
import { getTotalExperienceText } from '@/shared/utils/getTotalExperience.utils';

import { TExpirience } from '@/interfaces/expirience.types';

const ExperienceSection: FC = () => {
	const { t, i18n } = useTranslation();
	const {
		responsibility: responsibilityText,
		technologies: technologiesText,
		total: { main: mainTotal, more: moreTotal },
		main,
		more,
	} = t('experience', { returnObjects: true }) as TExpirience;

	const locale = getDateFnsLocale(i18n.resolvedLanguage);
	const totalProfessionalExperience = getTotalExperienceText(main.data, locale);
	const totalMoreExperience = more?.data?.length
		? getTotalExperienceText(more.data, locale)
		: null;

	return (
		<section
			id='experience'
			className='py-20 bg-gradient-to-b from-secondary/20 to-background'
		>
			<div className='container mx-auto px-4'>
				{/* Header */}
				<div className='text-center mb-16'>
					<SectionHeading
						index='02'
						title={main.title}
						className='pb-4 text-4xl'
					/>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{main.subtitle}
					</p>
				</div>

				{/* Totals */}
				<div className='max-w-4xl mx-auto mb-12'>
					<Card className='glass-effect hud-panel exp-total p-6 border-2 bg-primary/5'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
							<div className='exp-total-item text-center'>
								<h3 className='text-base font-semibold text-primary mb-1'>
									{mainTotal.title}
								</h3>
								<p className='text-3xl font-bold text-gradient'>
									{totalProfessionalExperience}
								</p>
								<p className='text-sm text-muted-foreground mt-1'>
									{mainTotal.description}
								</p>
							</div>

							{totalMoreExperience && (
								<div className='exp-total-item text-center'>
									<h3 className='text-base font-semibold text-primary mb-1'>
										{moreTotal.title}
									</h3>
									<p className='text-3xl font-bold text-gradient'>
										{totalMoreExperience}
									</p>
									<p className='text-sm text-muted-foreground mt-1'>
										{moreTotal.description}
									</p>
								</div>
							)}
						</div>
					</Card>
				</div>

				{/* Main experience */}
				<div className='max-w-4xl mx-auto space-y-8'>
					{main.data.map((experience, index) => (
						<ExperienceCard
							key={`main-${index}`}
							experience={experience}
							index={index}
							responsibilityText={responsibilityText}
							technologiesText={technologiesText}
						/>
					))}
				</div>

				{/* Labeled divider */}
				{more?.data?.length ? (
					<div className='max-w-4xl mx-auto mt-12'>
						<div className='relative my-10'>
							<Separator />
							<span className='exp-more-label absolute left-1/2 top-1/2 max-w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-center text-xs text-balance text-muted-foreground md:text-sm'>
								{more.title}
								{totalMoreExperience ? ` · ${totalMoreExperience}` : ''}
							</span>
						</div>

						{more.subtitle && (
							<p className='exp-more-sub text-center text-muted-foreground mb-8 text-balance'>
								{more.subtitle}
							</p>
						)}

						<div className='space-y-8'>
							{more.data.map((experience, index) => (
								<ExperienceCard
									key={`more-${index}`}
									experience={experience}
									index={main.data.length + index}
									responsibilityText={responsibilityText}
									technologiesText={technologiesText}
								/>
							))}
						</div>
					</div>
				) : null}
			</div>
		</section>
	);
};

export default ExperienceSection;
