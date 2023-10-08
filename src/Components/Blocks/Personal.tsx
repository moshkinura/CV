import { useTranslation } from 'react-i18next';

export const Personal = () => {
  const { t } = useTranslation();

  const personalName: string = t('personal.name');
  const personalNationalityName: string = t('personal.nationality.name');
  const personalNationalityValue: string = t('personal.nationality.value');
  const personalEducationName: string = t('personal.education.name');
  const personalEducationValue: string = t('personal.education.value');
  const personalBirthdayName: string = t('personal.birthday.name');
  const personalBirthdayValue: string = t('personal.birthday.value');
  const personalGenderName: string = t('personal.gender.name');
  const personalGenderValue: string = t('personal.gender.value');
  const personalMaritalName: string = t('personal.marital.name');
  const personalMaritalValue: string = t('personal.marital.value');

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
      <div className="col-12 block">
        <div className="block_title title_personal">{personalName}</div>
        <div className="block_group">
          <p>
            <b>{personalNationalityName}: </b>
            <span>{personalNationalityValue}</span>
          </p>
          <p>
            <b>{personalEducationName}: </b>
            <span>{personalEducationValue}</span>
          </p>
          <p>
            <b>{personalBirthdayName}: </b>
            <span>
              {formatDate(personalBirthdayValue)}г. (
              {age(personalBirthdayValue)} {ageText(age(personalBirthdayValue))}
              )
            </span>
          </p>
          <p>
            <b>{personalGenderName}: </b>
            <span>{personalGenderValue}</span>
          </p>
          <p>
            <b>{personalMaritalName}: </b>
            <span>{personalMaritalValue}</span>
          </p>
        </div>
      </div>
    </>
  );
};
