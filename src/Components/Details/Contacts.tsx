import { useTranslation } from 'react-i18next';

export const Contacts = () => {
  const { t } = useTranslation();

  const contactsName: string = t('contacts.name');
  const contactsTEL: string = t('contacts.tel');
  const contactsEMAIL: string = t('contacts.email');
  const contactsVK: string = t('contacts.vk');
  const contactsTG: string = t('contacts.tg');

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{contactsName}</div>
        <p className="details_line">
          <a href={'tel:' + contactsTEL}>{contactsTEL}</a>
        </p>
        <p className="details_line">
          <a href={'mailto:' + contactsEMAIL}>{contactsEMAIL}</a>
        </p>
        <p className="details_line">
          VK:
          <a
            href={'https://vk.com/' + contactsVK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'@' + contactsVK}
          </a>
        </p>
        <p className="details_line">
          Telegram:
          <a
            href={'https://t.me/' + contactsTG}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'@' + contactsTG}
          </a>
        </p>
      </div>
    </>
  );
};
