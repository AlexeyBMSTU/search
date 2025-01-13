import React from 'react';
import './styles.scss';

/**
 * Компонент для описания события
 * @param resolution Разрешение
 * @param year Год
 * @param description Описание
 * @returns
 */
const PlaceEvent: React.FC<PlaceEventProperties> = ({
  resolution,
  year,
  description,
}) => {
  return (
    <div className={'event ' + resolution}>
      <h3>{year}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PlaceEvent;
