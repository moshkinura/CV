import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { TDetails } from '../../Types';

export const Details = () => {
  const { t } = useTranslation();

  const details: TDetails = t('details', { returnObjects: true });

  return (
    <>
      <div className="col-12 block">
        <div className="block_title title_info">{details.name}</div>
        <div className="block_group">
          <div>
            <b>{details.driver.name}: </b>
            <span>{details.driver.value}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>{details.free.name}: </b>
            <span>{details.free.value}</span>
          </div>
        </div>
        <div className="block_group">
          <div>
            <b>{details.qualities.name}: </b>
            <ListGroup>
              {details.qualities.value.map((item: string, i: number) => {
                return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  );
};
