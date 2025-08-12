import { FC } from 'react';

import SkillBar from '@/widgets/SkillCard/ui/SkillBar';

import { Badge } from '@/shared/ui/badge';
import { Card } from '@/shared/ui/card';

import { TSkillsCategory } from '@/interfaces/skills.types';

interface Props {
	index: number;
	isVisible: boolean;
	category: TSkillsCategory;
}

const SkillCard: FC<Props> = ({ index, isVisible, category }) => {
	return (
		<Card
			key={index}
			className='glass-effect p-6 transition-all duration-500 hover:shadow-glow animate-slide-up'
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className='flex items-center gap-3 mb-6'>
				<Badge variant='secondary' className='text-primary font-semibold'>
					{category.name}
				</Badge>
			</div>

			<div className='space-y-4'>
				{category.data.map((skill, index) => (
					<SkillBar key={index} skill={skill} isVisible={isVisible} />
				))}
			</div>
		</Card>
	);
};

export default SkillCard;
