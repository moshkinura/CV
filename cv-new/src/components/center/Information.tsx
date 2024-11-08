import { Col, Image, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesome } from '@/components/FontAwesome';

import Photo from '@/assets/photo.jpg';

import { TBio } from '@/interfaces/bio.types';

export const Information = () => {
	const { t } = useTranslation();

	const bio: TBio = t('bio', { returnObjects: true }) as TBio;

	return (
		<>
			<Col className='photo'>
				<Image
					className='rounded-circle mx-auto d-block'
					src={Photo}
					alt='photo'
				/>
			</Col>
			<h2>{bio.fio}</h2>
			<Row className='justify-content-center'>
				<Col xs={12}>
					<FontAwesome icon={['fas', 'terminal']} className='px-1' />
					{bio.position}
				</Col>
				<Col xs={12}>
					<FontAwesome icon={['fas', 'location-dot']} className='px-1' />
					{bio.geo}
				</Col>
			</Row>
		</>
	);
};
