import { useTranslation } from 'react-i18next';

import { TPersonal } from '@/interfaces/personals.types';

export const Personal = () => {
	const { t } = useTranslation();

	const personal: TPersonal = t('personal', {
		returnObjects: true,
	}) as TPersonal;

	const formatDate = (date: string) => {
		const spl = date.split('/');
		return spl[2] + '.' + spl[1] + '.' + spl[0];
	};

	const age = (date: string) => {
		const today = new Date();
		const birthDate = new Date(date);
		const age = today.getFullYear() - birthDate.getFullYear();
		const m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			return age - 1;
		}
		return age;
	};

	const ageText = (age: number) => {
		const text_forms = ['год', 'года', 'лет'];
		const n = Math.abs(age) % 100;
		const n1 = n % 10;
		if (n > 10 && n < 20) {
			return text_forms[2];
		}
		if (n1 > 1 && n1 < 5) {
			return text_forms[1];
		}
		if (n1 === 1) {
			return text_forms[0];
		}
		return text_forms[2];
	};

	return (
		<>
			<div className='col-12 block'>
				<div className='block_title title_personal'>{personal.name}</div>
				<div className='block_group'>
					<p>
						<b>{personal.nationality.name}: </b>
						<span>{personal.nationality.value}</span>
					</p>
					<p>
						<b>{personal.education.name}: </b>
						<span>{personal.education.value}</span>
					</p>
					<p>
						<b>{personal.birthday.name}: </b>
						<span>
							{formatDate(personal.birthday.value)}г. (
							{age(personal.birthday.value)}{' '}
							{ageText(age(personal.birthday.value))})
						</span>
					</p>
					<p>
						<b>{personal.gender.name}: </b>
						<span>{personal.gender.value}</span>
					</p>
					<p>
						<b>{personal.marital.name}: </b>
						<span>{personal.marital.value}</span>
					</p>
				</div>
			</div>
		</>
	);
};
