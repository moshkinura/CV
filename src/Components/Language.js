import React from 'react';

import { Dropdown } from 'react-bootstrap';

import { FontAwesome } from './FontAwesome';
import { useTranslation } from 'react-i18next';

export const Language = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', country_code: 'en', name: 'English' },
    { code: 'ru', country_code: 'ru', name: 'Русский' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <FontAwesome icon="fa-solid fa-globe" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languages.map((item, i) => {
            return (
              <Dropdown.Item onClick={() => changeLanguage(item.code)} key={i}>
                {item.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
