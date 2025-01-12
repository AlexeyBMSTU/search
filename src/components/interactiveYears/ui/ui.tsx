import React from 'react';
import './styles.scss';
import { Years } from '@/components/interactiveYears/components';
import { useSelector } from 'react-redux';
import { ageIntervals } from '@/shared/consts/consts';

const PlaceYears: React.FC<PlaceYears> = ({ resolution }) => {
  const activeIndex = useSelector((state: any) => state.circle.activeIndex) + 1;
  const first = ageIntervals[activeIndex].first;
  const second = ageIntervals[activeIndex].second;
  return (
    <div className={'years ' + resolution}>
      <Years resolution={resolution} firstYear={first} secondYear={second} />
    </div>
  );
};

export default PlaceYears;
