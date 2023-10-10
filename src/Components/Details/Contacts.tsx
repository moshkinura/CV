import { useTranslation } from 'react-i18next';

import { TContacts } from '../../Types';

export const Contacts = () => {
  const { t } = useTranslation();

  const contacts: TContacts = t('contacts', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{contacts.name}</div>
        <p className="details_line">
          <a href={'tel:' + contacts.tel}>{contacts.tel}</a>
        </p>
        <p className="details_line">
          <a href={'mailto:' + contacts.email}>{contacts.email}</a>
        </p>
        <p className="details_line">
          VK:
          <a
            href={'https://vk.com/' + contacts.vk}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'@' + contacts.vk}
          </a>
        </p>
        <p className="details_line">
          Telegram:
          <a
            href={'https://t.me/' + contacts.tg}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'@' + contacts.tg}
          </a>
        </p>
      </div>
    </>
  );
};
