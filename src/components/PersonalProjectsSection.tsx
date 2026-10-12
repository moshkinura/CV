import { FC, useId, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import PortfolioCard from '@/widgets/PortfolioCard/PortfolioCard';

import { TPortfolio } from '@/interfaces/portfolio.types';

const PersonalProjectsSection: FC = () => {
	const { t } = useTranslation();
	const titleId = useId();
	const portfolio = useMemo(
		() => t('portfolio', { returnObjects: true }) as TPortfolio,
		[t],
	);

	return (
		<section
			id='projects'
			aria-labelledby={titleId}
			className='py-16 md:py-20 bg-linear-to-b from-secondary/20 to-background'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12 md:mb-16'>
					<h2
						id={titleId}
						className='text-3xl md:text-5xl font-bold text-gradient mb-4'
					>
						{portfolio.title}
					</h2>
					<p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto'>
						{portfolio.description}
					</p>
				</div>

				<div className='max-w-4xl mx-auto space-y-6 md:space-y-8'>
					{portfolio.items.map(project => (
						<PortfolioCard
							key={project.name}
							project={project}
							technologiesLabel={portfolio.technologies}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PersonalProjectsSection;
