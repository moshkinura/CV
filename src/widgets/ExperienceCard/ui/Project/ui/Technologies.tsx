import { FC } from 'react';

import { Badge } from '@/shared/ui/badge';

interface Props {
	technologiesText: string;
	technologies: string[];
}

const Technologies: FC<Props> = ({ technologiesText, technologies }) => {
	return (
		<div>
			<h6 className='font-medium text-sm mb-2'>{technologiesText}</h6>
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
