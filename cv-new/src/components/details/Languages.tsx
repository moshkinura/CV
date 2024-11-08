import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TLanguage, TLanguages } from '@/interfaces/languages.types';

export const Languages = () => {
	const { t } = useTranslation();

	const languages: TLanguages = t('languages', {
		returnObjects: true,
	}) as TLanguages;

	return (
		<>
			<div className='text-center details'>
				<div className='details_label'>{languages.name}</div>
				{languages.language.map((item: TLanguage, i: number) => {
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
			</div>
		</>
	);
};
