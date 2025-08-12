import { CalendarDays, MapPin, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Project {
	project: string;
	description: string;
	responsibilities: string[];
	technologies: string[];
}

interface Experience {
	company: string;
	position: string;
	location: string;
	period: [string, string];

	projects: Project[];
}

const calculateExperience = (startDate: string, endDate: string): number => {
	const start = new Date(startDate);
	const end = endDate === 'present' ? new Date() : new Date(endDate);
	const diffTime = Math.abs(end.getTime() - start.getTime());
	const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
	return Math.round(diffYears * 10) / 10; // округляем до 1 знака
};

const formatExperience = (
	years: number,
	t: (key: string) => string,
): string => {
	if (years < 1) {
		const months = Math.round(years * 12);
		return `${months} ${t('expirience.months')}`;
	}
	return `${years} ${t('expirience.years')}`;
};

const ExperienceCard = ({
	expirience,
	index,
	t,
}: {
	expirience: Experience;
	index: number;
	t: (key: string) => string;
}) => {
	const experienceYears = calculateExperience(
		expirience.period[0],
		expirience.period[1],
	);

	return (
		<Card
			className='glass-effect p-8 transition-all duration-500 hover:shadow-glow animate-slide-up border-2'
			style={{ animationDelay: `${index * 0.2}s` }}
		>
			{/* Company and Position */}
			<div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6'>
				<div className='space-y-2'>
					<h3 className='text-2xl font-bold text-gradient'>
						{expirience.company}
					</h3>
					<h4 className='text-xl font-semibold text-primary'>
						{expirience.position}
					</h4>
				</div>
				<Badge
					variant='secondary'
					className='self-start bg-primary/10 text-primary border-primary/20'
				>
					<CalendarDays className='w-4 h-4 mr-2' />
					{formatExperience(experienceYears, t)}
				</Badge>
			</div>

			{/* Location and Period */}
			<div className='flex flex-wrap gap-4 text-muted-foreground mb-8'>
				<div className='flex items-center gap-2'>
					<MapPin className='w-4 h-4' />
					<span>{expirience.location}</span>
				</div>
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-4 h-4' />
					<span>{`${expirience.period[0]} - ${expirience.period[1]}`}</span>
				</div>
			</div>

			{/* Projects */}
			<div className='space-y-6'>
				{expirience.projects.map((project, projectIndex) => (
					<div key={projectIndex} className='border-l-4 border-accent pl-6'>
						<div className='flex items-center gap-2 mb-3'>
							<Zap className='w-5 h-5 text-accent' />
							<h5 className='font-semibold text-lg text-foreground'>
								{project.project}
							</h5>
						</div>

						<p className='text-muted-foreground mb-4 leading-relaxed'>
							{project.description}
						</p>

						{/* Responsibilities */}
						<div className='mb-4'>
							<div className='flex items-center gap-2 mb-3'>
								<Users className='w-4 h-4 text-primary' />
								<h6 className='font-medium text-sm'>
									{t('expirience.responsibility')}
								</h6>
							</div>
							<ul className='space-y-2'>
								{project.responsibilities.map((responsibility, idx) => (
									<li key={idx} className='flex items-start gap-3'>
										<div className='w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0' />
										<span className='text-muted-foreground text-sm leading-relaxed'>
											{responsibility}
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* Technologies */}
						<div>
							<h6 className='font-medium text-sm mb-2'>
								{t('expirience.technologies')}
							</h6>
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
					</div>
				))}
			</div>
		</Card>
	);
};

const ExperienceSection = () => {
	const { t } = useTranslation();
	//eslint-disable-next-line
	const expirienceMain = t('expirience.main', { returnObjects: true }) as any;
	//eslint-disable-next-line
	const expirienceMore = t('expirience.more', { returnObjects: true }) as any;

	// const experiences: Experience[] = [
	// 	{
	// 		company: t('experience.company'),
	// 		position: t('experience.position'),
	// 		location: t('experience.location'),
	// 		duration: t('experience.duration'),
	// 		period: t('experience.period'),
	// 		startDate: '2023-01-01',
	// 		endDate: 'present',
	// 		projects: [
	// 			{
	// 				name: t('experience.project'),
	// 				description: t('experience.project.description'),
	// 				responsibilities: [
	// 					t('experience.responsibilities.1'),
	// 					t('experience.responsibilities.2'),
	// 					t('experience.responsibilities.3'),
	// 					t('experience.responsibilities.4'),
	// 					t('experience.responsibilities.5'),
	// 				],
	// 				technologies: [
	// 					'Node.JS',
	// 					'Nest.JS',
	// 					'TypeScript',
	// 					'PostgreSQL',
	// 					'Docker',
	// 				],
	// 			},
	// 		],
	// 	},
	// ];

	// Подсчет общего стажа
	// const totalExperience = experiences.reduce((total, exp) => {
	// 	return total + calculateExperience(exp.startDate, exp.endDate);
	// }, 0);

	return (
		<section className='py-20 bg-gradient-to-b from-secondary/20 to-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gradient mb-4'>
						{expirienceMain.title}
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						{expirienceMain.subtitle}
					</p>
				</div>

				{/* Total Experience Summary */}
				<div className='max-w-4xl mx-auto mb-12'>
					<Card className='glass-effect p-6 text-center border-2 bg-primary/5'>
						<h3 className='text-xl font-bold text-primary mb-2'>
							{t('expirience.total.title')}
						</h3>
						<p className='text-3xl font-bold text-gradient'>
							{/* {formatExperience(totalExperience, t)} */}
							undefined
						</p>
						<p className='text-muted-foreground mt-2'>
							{t('expirience.total.description')}
						</p>
					</Card>
				</div>

				<div className='max-w-4xl mx-auto space-y-8'>
					{expirienceMain.data.map((expirience, index) => (
						<ExperienceCard
							key={index}
							expirience={expirience}
							t={t}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
