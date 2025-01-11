import React from 'react';
import './styles.scss';
import { Years } from '@/components/interactiveYears/components';

const PlaceYears: React.FC<InteractiveYears> = ({
  resolution,
  firstYear,
  secondYear,
}) => {
  return (
    <div className={'years ' + resolution}>
      <Years
        resolution={resolution}
        firstYear={firstYear}
        secondYear={secondYear}
      />
    </div>
  );
};

export default PlaceYears;
