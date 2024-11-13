import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TSkill, TSkills } from '@/interfaces/skills.types';

export const Skills = () => {
	const { t } = useTranslation();

	const skills: TSkills = t('skills', { returnObjects: true }) as TSkills;

	return (
		<>
			<div className='text-center details'>
				<div className='details_label'>{skills.name}</div>
				{skills.skill.map((item: TSkill, i: number) => {
					return (
						<div key={i}>
							<p className='details_line'>{item.name}</p>
							<ProgressBar
								variant='info'
								now={item.percent}
								label={item.percent + '%'}
							/>
						</div>
					);
				})}
				<div>
					<p className='details_line'>{skills.information}</p>
				</div>
			</div>
		</>
	);
};
