import { FC } from 'react';

import { Card } from '@/shared/ui/card';

import HeaderCard from './ui/HeaderCard';
import Project from './ui/Project/Project';
import { TWorkExpirienceData } from '@/interfaces/expirience.types';

interface Props {
	experience: TWorkExpirienceData;
	index: number;
	responsibilityText: string;
	technologiesText: string;
}

const ExperienceCard: FC<Props> = ({
	experience,
	index,
	responsibilityText,
	technologiesText,
}) => {
	const { projects } = experience;

	return (
		<Card
			className='glass-effect p-8 transition-all duration-500 hover:shadow-glow animate-slide-up border-2'
			style={{ animationDelay: `${index * 0.2}s` }}
		>
			<HeaderCard experience={experience} />

			{/* Projects */}
			<div className='space-y-6'>
				{projects.map((project, i) => (
					<Project
						key={i}
						project={project}
						responsibilityText={responsibilityText}
						technologiesText={technologiesText}
					/>
				))}
			</div>
		</Card>
	);
};

export default ExperienceCard;
