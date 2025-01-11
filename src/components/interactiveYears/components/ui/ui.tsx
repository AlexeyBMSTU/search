import React from 'react';
import './styles.scss';

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
