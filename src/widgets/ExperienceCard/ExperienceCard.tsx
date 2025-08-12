import { Zap } from 'lucide-react';
import { FC } from 'react';

import { Card } from '@/shared/ui/card';

import HeaderCard from './ui/HeaderCard';
import Responsibilities from './ui/Responsibilities';
import Technologies from './ui/Technologies';
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
				{projects.map((project, projectIndex) => (
					<div key={projectIndex} className='border-l-4 border-accent pl-6'>
						<div className='flex items-center gap-2 mb-3'>
							<Zap className='w-5 h-5 text-accent' />
							<h5 className='font-semibold text-lg text-foreground'>
								{project.name}
							</h5>
						</div>

						<p className='text-muted-foreground mb-4 leading-relaxed'>
							{project.description}
						</p>

						{/* Responsibilities */}
						<Responsibilities
							responsibilityText={responsibilityText}
							responsibilities={project.responsibilities}
						/>

						{/* Technologies */}
						<Technologies
							technologiesText={technologiesText}
							technologies={project.technologies}
						/>
					</div>
				))}
			</div>
		</Card>
	);
};

export default ExperienceCard;
