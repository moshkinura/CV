import { useTranslation } from 'react-i18next';

import { TEmployments } from '../../Types';

export const Employment = () => {
  const { t } = useTranslation();

  const employments: TEmployments = t('employments', {
    returnObjects: true,
  });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{employments.name}</div>
        {employments.employment.map((item: string, i: number) => {
          return (
            <p className="details_line" key={i}>
              {item}
            </p>
          );
        })}

        <p className="details_line_small bg-warning text-black">
          {employments.information}
        </p>
      </div>
    </>
  );
};
