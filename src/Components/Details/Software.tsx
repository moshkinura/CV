import { useTranslation } from 'react-i18next';

export const Software = () => {
  const { t } = useTranslation();

  const softwareName: string = t('software.name');
  const softwareData: any = t('software.soft', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{softwareName}</div>
        {softwareData.map((item: any, i: number) => {
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
