import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesome } from './FontAwesome';

export const Language = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', country_code: 'en', name: 'English' },
    { code: 'ru', country_code: 'ru', name: 'Русский' },
  ];

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <FontAwesome icon="fa-solid fa-globe" /> {i18n.t('lang')}
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
