import { useTranslation } from 'react-i18next';

import { TShedules } from '../../Types';

export const Shedule = () => {
  const { t } = useTranslation();

  const shedules: TShedules = t('shedules', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{shedules.name}</div>
        {shedules.shedule.map((item: string, i: number) => {
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
