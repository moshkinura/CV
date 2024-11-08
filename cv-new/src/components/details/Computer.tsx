import { useTranslation } from 'react-i18next';

import { FontAwesome } from '@/components/FontAwesome';

import { TComputer } from '@/interfaces/computer.types';

export const Computer = () => {
	const { t } = useTranslation();

	const computer: TComputer = t('computer', {
		returnObjects: true,
	}) as TComputer;

	return (
		<>
			<div className='text-center details'>
				<div className='details_label'>{computer.name}</div>
				<p className='details_line'>
					<FontAwesome icon={['fas', 'microchip']} /> {computer.cpu}
				</p>

				<p className='details_line'>
					<FontAwesome icon={['fas', 'memory']} /> {computer.ram}
				</p>

				<p className='details_line'>
					<FontAwesome icon={['fas', 'desktop']} /> {computer.gpu}
				</p>
			</div>
		</>
	);
};
