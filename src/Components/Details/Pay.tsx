import { useTranslation } from 'react-i18next';

export const Pay = () => {
  const { t } = useTranslation();

  const payName: string = t('pay.name');
  const payFrom: string = t('pay.from');
  const payRUB: string = t('pay.rub');
  const payUSD: string = t('pay.usd');
  const payEUR: string = t('pay.eur');

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{payName}</div>
        <p className="details_line">
          {payFrom} {payRUB} / {payUSD} / {payEUR}
        </p>
      </div>
    </>
  );
};
