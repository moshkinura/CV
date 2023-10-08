import { useTranslation } from 'react-i18next';

export const Learns = () => {
  const { t } = useTranslation();

  const learnsName: string = t('learns.name');
  const learnsData: any = t('learns.learn', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{learnsName}</div>
        {learnsData.map((item: any, i: number) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
