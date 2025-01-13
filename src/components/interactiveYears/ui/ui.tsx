import React from 'react';
import './styles.scss';
import { Years } from '@/components/interactiveYears/components';
import { useSelector } from 'react-redux';
import generateDATAKey from '@/shared/generateKey/generateKey';
import { DATA } from '@/shared/consts/consts';

const PlaceYears: React.FC<PlaceYears> = ({ resolution }) => {
  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.activeIndex,
  );
  const key = generateDATAKey(activeIndex);

  const first = DATA[key].AGE_INTERVAL.FIRST;
  const second = DATA[key].AGE_INTERVAL.SECOND;
  return (
    <div className={'years ' + resolution}>
      <Years resolution={resolution} firstYear={first} secondYear={second} />
    </div>
  );
};

export default PlaceYears;
