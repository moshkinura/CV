import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Details = () => {
  const { t } = useTranslation();

  const detailsName: string = t('details.name');
  const detailsDriverName: string = t('details.driver.name');
  const detailsDriverValue: string = t('details.driver.value');
  const detailsFreeName: string = t('details.free.name');
  const detailsFreeValue: string = t('details.free.value');
  const detailsQualitiesName: string = t('details.qualities.name');
  const detailsQualitiesValue: any = t('details.qualities.value', {
    returnObjects: true,
  });

  return (
    <>
      <div className="col-12 block">
        <div className="block_title title_info">{detailsName}</div>
        <div className="block_group">
          <div>
            <b>{detailsDriverName}: </b>
            <span>{detailsDriverValue}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>{detailsFreeName}: </b>
            <span>{detailsFreeValue}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>{detailsQualitiesName}: </b>
            <ListGroup>
              {detailsQualitiesValue.map((item: any, i: number) => {
                return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  );
};
