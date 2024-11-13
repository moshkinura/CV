import { Col, Container, Row } from 'react-bootstrap';

import { Language } from '@/components/Language';
import { Details } from '@/components/blocks/Details';
import { Expirience } from '@/components/blocks/Expirience';
import { Personal } from '@/components/blocks/Personal';
import { Information } from '@/components/center/Information';
import { Computer } from '@/components/details/Computer';
import { Contacts } from '@/components/details/Contacts';
import { Employment } from '@/components/details/Employment';
import { Languages } from '@/components/details/Languages';
import { Learns } from '@/components/details/Learns';
import { Pay } from '@/components/details/Pay';
import { Shedule } from '@/components/details/Shedule';
import { Skills } from '@/components/details/Skills';
import { Software } from '@/components/details/Software';

export const CurriculumVitae = () => {
	return (
		<div className='section'>
			<div className='language'>
				<Language />
			</div>
			<Container>
				<Row>
					<Col xs={12} className='text-center'>
						<Information />
					</Col>
				</Row>

				<Row>
					<Col xs={12} lg={{ span: 3, offset: 2 }}>
						<Contacts />
						<Pay />
						<Shedule />
						<Employment />
						<Languages />
						<Skills />
						<Learns />
						<Computer />
						<Software />
					</Col>

					<Col xs={12} lg={5}>
						<Row>
							<Personal />
							<Expirience />
							<Details />
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
