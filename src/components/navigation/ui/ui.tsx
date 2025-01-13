import React from 'react';
import './styles.scss';
import { NavigationButtons } from '../components/buttons';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { ITEMS_COUNT } from '@/shared/consts/consts';
import compareToString from '@/shared/compareToString/compare';

const Navigate: React.FC = () => {
  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.currentIndex,
  );
  const allCount = compareToString(ITEMS_COUNT);
  return (
    <div className={isMobile ? 'navigation mobile' : 'navigation desktop'}>
      <span>
        {activeIndex}/{allCount}
      </span>
      <NavigationButtons />
    </div>
  );
};

export default Navigate;
