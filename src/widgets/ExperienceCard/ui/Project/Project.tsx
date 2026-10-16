import { Zap } from 'lucide-react';
import { FC } from 'react';

import { useTranslation } from '@/shared/i18n/useTranslation';

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
	const { t } = useTranslation();

	return (
		<div className='exp-project border-l-4 border-accent pl-6'>
			<div className='exp-project-head flex items-center gap-2 mb-3'>
				<Zap className='w-5 h-5 text-accent' />
				<h5
					className='exp-project-title font-semibold text-lg text-foreground'
					data-prefix={t('hud.project')}
				>
					{project.name}
				</h5>
			</div>

			<p className='exp-project-desc text-muted-foreground mb-4 leading-relaxed'>
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
