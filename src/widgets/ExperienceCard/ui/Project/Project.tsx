import { Zap } from 'lucide-react';
import { FC } from 'react';

import Responsibilities from './ui/Responsibilities';
import Technologies from './ui/Technologies';
import { TWorkExpirienceProject } from '@/interfaces/expirience.types';

interface Props {
	responsibilityText: string;
	technologiesText: string;
	project: TWorkExpirienceProject;
}

const Project: FC<Props> = ({
	responsibilityText,
	technologiesText,
	project,
}) => {
	return (
		<div className='border-l-4 border-accent pl-6'>
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
	);
};

export default Project;
