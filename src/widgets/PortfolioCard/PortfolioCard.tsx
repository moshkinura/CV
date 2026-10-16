import { FC } from 'react';

import { useTranslation } from '@/shared/i18n/useTranslation';
import { Badge } from '@/shared/ui/badge';
import { BrandLogo, resolveBrand } from '@/shared/ui/brand-logo';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';

import { TPortfolioProject } from '@/interfaces/portfolio.types';

interface Props {
	project: TPortfolioProject;
	technologiesLabel: string;
}

const PortfolioCard: FC<Props> = ({ project, technologiesLabel }) => {
	const { t } = useTranslation();
	const screenshots = project.screenshots ?? [];
	const links = project.links ?? [];

	return (
		<Card className='glass-effect hud-panel portfolio-card p-6 md:p-8'>
			<h3
				className='portfolio-title text-xl md:text-2xl font-bold mb-3'
				data-prefix={t('hud.project')}
			>
				{project.name}
			</h3>
			<p className='portfolio-desc text-muted-foreground leading-relaxed mb-6'>
				{project.description}
			</p>

			{screenshots.length > 0 && (
				<div
					className={`mb-6 grid gap-4 ${screenshots.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}
				>
					{screenshots.map(shot => (
						<img
							key={shot.src}
							src={shot.src}
							alt={shot.alt}
							loading='lazy'
							className='portfolio-shot w-full max-h-80 rounded-xl border border-border object-cover object-top'
						/>
					))}
				</div>
			)}

			{project.technologies.length > 0 && (
				<div className='mb-6'>
					<h4
						className='exp-sub cyber-relabel font-medium text-sm mb-2'
						data-cyber={t('hud.stackTechnologies')}
					>
						{technologiesLabel}
					</h4>
					<div className='flex flex-wrap gap-2'>
						{project.technologies.map(tech => (
							<Badge
								key={tech}
								variant='outline'
								className='text-primary border-primary/30 bg-primary/5'
							>
								{tech}
							</Badge>
						))}
					</div>
				</div>
			)}

			{links.length > 0 && (
				<div className='portfolio-links flex flex-wrap gap-2'>
					{links.map(link => {
						const brand = resolveBrand(link.name, link.url);

						return (
							<Button key={link.url} variant='outline' size='sm' asChild>
								<a href={link.url} target='_blank' rel='noreferrer'>
									{brand && <BrandLogo brand={brand} />}
									{link.name}
								</a>
							</Button>
						);
					})}
				</div>
			)}
		</Card>
	);
};

export default PortfolioCard;
