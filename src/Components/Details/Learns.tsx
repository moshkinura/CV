import { useTranslation } from 'react-i18next';

import { TLearn, TLearns } from '../../Types';

export const Learns = () => {
  const { t } = useTranslation();

  const learns: TLearns = t('learns', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{learns.name}</div>
        {learns.learn.map((item: TLearn, i: number) => {
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
