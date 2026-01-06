import { FC, useEffect, useState } from 'react';

import { TSkill } from '@/interfaces/skills.types';

interface Props {
	skill: TSkill;
	isVisible: boolean;
}
const SkillBar: FC<Props> = ({ skill, isVisible }) => {
	const [animatedLevel, setAnimatedLevel] = useState(0);

	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				setAnimatedLevel(skill.percent);
			}, 200);
			return () => clearTimeout(timer);
		}
	}, [isVisible, skill.percent]);

	const getColorClass = (percent: number) => {
		if (percent >= 80) return 'bg-success';
		if (percent >= 60) return 'bg-primary';
		if (percent >= 40) return 'bg-warning';
		return 'bg-destructive';
	};

	return (
		<div className='space-y-2'>
			<div className='flex justify-between items-center'>
				<span className='text-sm font-medium'>{skill.name}</span>
				<span className='text-sm text-muted-foreground'>{skill.percent}%</span>
			</div>
			<div className='h-2 bg-secondary rounded-full overflow-hidden'>
				<div
					className={`h-full ${getColorClass(skill.percent)} transition-all duration-1000 ease-out`}
					style={{ width: `${animatedLevel}%` }}
				/>
			</div>
		</div>
	);
};

export default SkillBar;
