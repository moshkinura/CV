import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ExperienceCard from '@/widgets/ExperienceCard/ExperienceCard';

import { Card } from '@/shared/ui/card';
import { getDateFnsLocale } from '@/shared/utils/getDateFnsLocale.utils';
import { getTotalExperienceText } from '@/shared/utils/getTotalExperience.utils';

import { TExpirience } from '@/interfaces/expirience.types';

const ExperienceSection: FC = () => {
	const { t, i18n } = useTranslation();
	const {
		responsibility: responsibilityText,
		technologies: technologiesText,
		total,
		main,
		//more,
	} = t('experience', {
		returnObjects: true,
	}) as TExpirience;

	const totalExperience = getTotalExperienceText(
		main.data,
		getDateFnsLocale(i18n.resolvedLanguage),
	);

	return (
		<section className='py-20 bg-gradient-to-b from-secondary/20 to-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gradient mb-4 pb-4'>
						{main.title}
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{main.subtitle}
					</p>
				</div>

				{/* Total Experience Summary */}
				<div className='max-w-4xl mx-auto mb-12'>
					<Card className='glass-effect p-6 text-center border-2 bg-primary/5'>
						<h3 className='text-xl font-bold text-primary mb-2'>
							{total.title}
						</h3>
						<p className='text-3xl font-bold text-gradient'>
							{totalExperience}
						</p>
						<p className='text-muted-foreground mt-2'>{total.description}</p>
					</Card>
				</div>

				<div className='max-w-4xl mx-auto space-y-8'>
					{main.data.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
							index={index}
							responsibilityText={responsibilityText}
							technologiesText={technologiesText}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
