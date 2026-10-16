import { FC, useMemo } from 'react';

import SkillBar from '@/widgets/SkillCard/ui/SkillBar';

import { useTranslation } from '@/shared/i18n/useTranslation';
import { Badge } from '@/shared/ui/badge';
import { Card } from '@/shared/ui/card';

import { TSkillsCategory } from '@/interfaces/skills.types';

interface Props {
	index: number;
	isVisible: boolean;
	category: TSkillsCategory;
	categoryKey?: string;
}

const SkillCard: FC<Props> = ({ index, isVisible, category, categoryKey }) => {
	const { t } = useTranslation();
	const skills = useMemo(
		() => [...category.data].sort((a, b) => b.percent - a.percent),
		[category.data],
	);

	return (
		<Card
			key={index}
			className='glass-effect hud-panel skill-card p-6 transition-all duration-500 hover:shadow-glow animate-slide-up'
			style={{ animationDelay: `${index * 0.1}s` }}
		>
			<div className='skill-card-head flex items-center gap-3 mb-6'>
				<Badge variant='secondary' className='text-primary font-semibold'>
					{category.name}
				</Badge>
				{categoryKey && (
					<span
						className='cyber-only cyber-module-key hidden'
						aria-hidden='true'
					>
						{t('hud.skills')}
						{categoryKey}
					</span>
				)}
			</div>

			<div className='space-y-4'>
				{skills.map(skill => (
					<SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
				))}
			</div>
		</Card>
	);
};

export default SkillCard;
