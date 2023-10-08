import { useTranslation } from 'react-i18next';

export const Shedule = () => {
  const { t } = useTranslation();

  const shedulesName: string = t('shedules.name');
  const shedulesData: any = t('shedules.shedule', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{shedulesName}</div>
        {shedulesData.map((item: any, i: number) => {
          return (
            <p className="details_line_small" key={i}>
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
};
