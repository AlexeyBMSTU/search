import React from 'react';
import './styles.scss';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { ageIntervals, itemsCount } from '@/shared/consts/consts';
import { hdl } from '@/shared/handlerClick/handlerClick';
import animateNumber from '@/shared/animations/animations';

const NavigationButtons = () => {
  const activeIndex = useSelector((state: any) => state.circle.activeIndex);
  const isAnimationComplete = useSelector(
    (state: any) => state.circle.isAnimationComplete,
  );
  const [, , , , , handleClickItem] = hdl();

  const handleNavigation = (direction: any) => {
    if (!isAnimationComplete) return;

    const newIndex = (activeIndex + direction + itemsCount) % itemsCount;
    const circle = document.querySelector('.circle');
    const items = circle ? document.querySelectorAll('.item') : null;

    handleClickItem(newIndex, circle, items);
    animateNumber(
      '.year-first',
      ageIntervals[activeIndex + 1].first,
      ageIntervals[newIndex + 1].first,
    );
    animateNumber(
      '.year-second',
      ageIntervals[activeIndex + 1].first,
      ageIntervals[newIndex + 1].first,
    );
  };

  return (
    <div className='navigation-buttons'>
      <button
        className={`navigation-buttons__button ${isMobile ? 'mobile' : 'desktop'}`}
        onClick={() => handleNavigation(-1)}
        disabled={activeIndex === 0 || !isAnimationComplete}
      >
        &lt;
      </button>
      <button
        className={`navigation-buttons__button ${isMobile ? 'mobile' : 'desktop'}`}
        onClick={() => handleNavigation(1)}
        disabled={activeIndex === itemsCount - 1 || !isAnimationComplete}
      >
        &gt;
      </button>
    </div>
  );
};

export default NavigationButtons;
