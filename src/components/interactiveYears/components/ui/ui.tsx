import React from 'react';
import './styles.scss';

/**
 * Компонент годов
 * @param resolution Разрешение
 * @param firstYear Первый год (левый)
 * @param secondYear Второй год (правый)
 * @returns
 */
const Years: React.FC<InteractiveYears> = ({
  resolution,
  firstYear,
  secondYear,
}) => {
  return (
    <>
      <div className={'year year-first ' + resolution}>{firstYear}</div>
      <div className={'year year-second ' + resolution}>{secondYear}</div>
    </>
  );
};

export default Years;
