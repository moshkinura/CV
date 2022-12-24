import React from 'react';

import { ListGroup } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

export const Expirience = () => {
  const { t } = useTranslation();

  const expiration = (start, end) => {
    let current = end ? new Date(end) : new Date();
    let old = new Date(start);
    let days = Math.ceil(
      Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24),
    );
    let year = Math.floor(days / 365);
    let months = Math.floor((days - year * 365) / 30);

    return {
      days,
      months,
      years: year,
    };
  };

  const formDate = (val, forms) => {
    let d = Math.abs(val) % 100;
    let d1 = d % 10;

    if (d > 10 && d < 20) {
      return forms[2];
    }
    if (d1 > 1 && d1 < 5) {
      return forms[1];
    }
    if (d1 === 1) {
      return forms[0];
    }
    return forms[2];
  };

  const periodDate = (period) => {
    let age = expiration(period[0], period[1]);
    let splitStart = period[0].split('/');
    let splitEnd = period[1] ? period[1].split('/') : [];

    const forms_month = ['месяц', 'месяца', 'месяцев'];
    const forms_year = ['год', 'года', 'лет'];

    return `${splitStart[1]}.${splitStart[0]} - ${
      period[1] ? splitEnd[1] + '.' + splitEnd[0] : 'настоящее время'
    } (${age.years ? age.years + formDate(age.years, forms_year) + ' ' : ''}${
      age.months ? age.months + formDate(age.months, forms_month) : ''
    })`;
  };

  return (
    <>
      <div className="col-12 block">
        <div className="block_title title_expirience">
          {t('expirience.main.name')}
        </div>

        {t('expirience.main.data', { returnObjects: true }).map((item, i) => {
          return (
            <div className="block_group" key={i}>
              <div className="expirience_position">
                <span>{item.position}</span>
              </div>
              <div className="expirience_company">
                <span>{item.company}</span>
              </div>
              <div className="expirience_period">
                <span>
                  {item.city ? item.city + ',' : <></>}
                  {periodDate(item.period)}
                </span>
              </div>
              {item.details ? (
                <div className="expirience_details">
                  <span>{item.details}</span>
                </div>
              ) : (
                <></>
              )}

              {item.skills ? (
                <div className="expirience_details">
                  <ListGroup>
                    {item.skills.map((item, i) => {
                      return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
                    })}
                  </ListGroup>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>

      <div className="col-12 block">
        <div className="block_title title_expirience">
          {t('expirience.more.name')}
        </div>

        {t('expirience.more.data', { returnObjects: true }).map((item, i) => {
          return (
            <div className="block_group" key={i}>
              <div className="expirience_position">
                <span>{item.position}</span>
              </div>
              <div className="expirience_company">
                <span>{item.company}</span>
              </div>
              <div className="expirience_period">
                <span>
                  {item.city ? item.city + ',' : <></>}
                  {periodDate(item.period)}
                </span>
              </div>
              {item.details ? (
                <div className="expirience_details">
                  <span>{item.details}</span>
                </div>
              ) : (
                <></>
              )}

              {item.skills ? (
                <div className="expirience_details">
                  <ListGroup>
                    {item.skills.map((item, i) => {
                      return <ListGroup.Item key={i}>{item}</ListGroup.Item>;
                    })}
                  </ListGroup>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
