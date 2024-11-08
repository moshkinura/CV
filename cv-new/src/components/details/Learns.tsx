import { useTranslation } from 'react-i18next';

import { TLearn, TLearns } from '@/interfaces/learns.types';

export const Learns = () => {
	const { t } = useTranslation();

	const learns: TLearns = t('learns', { returnObjects: true }) as TLearns;

	return (
		<>
			<div className='text-center details'>
				<div className='details_label'>{learns.name}</div>
				{learns.learn.map((item: TLearn, i: number) => {
					return (
						<div key={i}>
							<p className='details_line'>{item.name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
