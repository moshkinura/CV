import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/shared/ui/badge';

interface Props {
	technologiesText: string;
	technologies: string[];
}

const Technologies: FC<Props> = ({ technologiesText, technologies }) => {
	const { t } = useTranslation();

	return (
		<div>
			<h6
				className='exp-sub cyber-relabel font-medium text-sm mb-2'
				data-cyber={t('hud.stackTechnologies')}
			>
				{technologiesText}
			</h6>
			<div className='flex flex-wrap gap-2'>
				{technologies.map(tech => (
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
	);
};

export default Technologies;
