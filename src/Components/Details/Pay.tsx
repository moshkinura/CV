import { useTranslation } from 'react-i18next';

import { TPay } from '@/interfaces/pay.types';

export const Pay = () => {
	const { t } = useTranslation();

	const pay: TPay = t('pay', { returnObjects: true }) as TPay;

	return (
		<>
			<div className='text-center details'>
				<div className='details_label'>{pay.name}</div>
				<p className='details_line'>
					{pay.from} {pay.rub} / {pay.usd} / {pay.eur}
				</p>
			</div>
		</>
	);
};
