import React from 'react';
import './styles.scss';
import { NavigationButtons } from '../components/buttons';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { itemsCount } from '@/shared/consts/consts';
import compareToString from '@/shared/compareToString/compare';

const Navigation = () => {
  const activeIndex = useSelector((state: any) => state.circle.currentIndex);
  const allCount = compareToString(itemsCount);
  return (
    <div className={isMobile ? 'navigation mobile' : 'navigation desktop'}>
      <span>
        {activeIndex}/{allCount}
      </span>
      <NavigationButtons />
    </div>
  );
};

export default Navigation;
