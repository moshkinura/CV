import { useTranslation } from 'react-i18next';

import { FontAwesome } from '../FontAwesome';

export const Computer = () => {
  const { t } = useTranslation();

  const computerName: string = t('computer.name');
  const computerCPU: string = t('computer.cpu');
  const computerRAM: string = t('computer.ram');
  const computerGPU: string = t('computer.gpu');

  return (
    <>
      <div className="text-center details">
        <div className="details_label">{computerName}</div>
        <p className="details_line">
          <FontAwesome icon="fa-solid fa-microchip" /> {computerCPU}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-memory" /> {computerRAM}
        </p>

        <p className="details_line">
          <FontAwesome icon="fa-solid fa-desktop" /> {computerGPU}
        </p>
      </div>
    </>
  );
};
