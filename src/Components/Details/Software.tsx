import { useTranslation } from 'react-i18next';

import { TSoftware } from '../../Types/software.types';

export const Software = () => {
  const { t } = useTranslation();

  const software: TSoftware = t('software', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{software.name}</div>
        {software.soft.map((item: string, i: number) => {
          return (
            <p className="details_line" key={i}>
              {item}
            </p>
          );
        })}
      </div>
    </>
  );
};
