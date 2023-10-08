import { ProgressBar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  const skillsName: string = t('skills.name');
  const skillsData: any = t('skills.skill', { returnObjects: true });
  const skillsInformation: string = t('skills.information');

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{skillsName}</div>
        {skillsData.map((item: any, i: number) => {
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
        <div>
          <p className="details_line">{skillsInformation}</p>
        </div>
      </div>
    </>
  );
};
