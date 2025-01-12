import React from 'react';
import './styles.scss';

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
