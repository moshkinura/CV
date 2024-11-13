import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesome } from '@/components/FontAwesome';

import {
	ELanguage,
	TLanguagesI18N,
} from '@/interfaces/languagesI18N.interface';

export const Language = () => {
	const { i18n } = useTranslation();

	const languages: TLanguagesI18N[] = [
		{ code: ELanguage.EN, country_code: ELanguage.EN, name: 'English' },
		{ code: ELanguage.RU, country_code: ELanguage.RU, name: 'Русский' },
	];

	const changeLanguage = (lng: string): void => {
		i18n.changeLanguage(lng);
	};

	return (
		<Navbar>
			<Container>
				<Navbar.Collapse className='justify-content-end'>
					<Dropdown>
						<Dropdown.Toggle variant='secondary' id='dropdown-basic'>
							<FontAwesome icon={['fas', 'globe']} /> {i18n.t('lang')}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{languages.map((item: any, i: number) => {
								return (
									<Dropdown.Item
										onClick={() => changeLanguage(item.code)}
										key={i}
									>
										{item.name}
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
