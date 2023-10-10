import { useTranslation } from 'react-i18next';

import { FontAwesome } from '../FontAwesome';

import { TComputer } from '../../Types';

export const Computer = () => {
  const { t } = useTranslation();

  const computer: TComputer = t('computer', { returnObjects: true });

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{computer.name}</div>
        <p className="details_line">
          <FontAwesome icon="fa-solid fa-microchip" /> {computer.cpu}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-memory" /> {computer.ram}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-desktop" /> {computer.gpu}
        </p>
      </div>
    </>
  );
};
