import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Languages = () => {
  const { t } = useTranslation();
  const languagesName: string = t('languages.name');
  const languagesData: any = t('languages.language', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{languagesName}</div>
        {languagesData.map((item: any, i: number) => {
          return (
            <div key={i}>
              <p className="details_line">{item.name}</p>
              <ProgressBar
                variant="info"
                now={item.percent}
                label={item.percent + '%'}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
