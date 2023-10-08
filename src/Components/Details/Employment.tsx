import { useTranslation } from 'react-i18next';

export const Employment = () => {
  const { t } = useTranslation();

  const employmentsName: string = t('employments.name');
  const employmentsEmployment: any = t('employments.employment', {
    returnObjects: true,
  });
  const employmentsInformation: string = t('employments.information');

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{employmentsName}</div>
        {employmentsEmployment.map((item: any, i: number) => {
          return (
            <p className="details_line" key={i}>
              {item}
            </p>
          );
        })}

        <p className="details_line_small bg-warning text-black">
          {employmentsInformation}
        </p>
      </div>
    </>
  );
};
