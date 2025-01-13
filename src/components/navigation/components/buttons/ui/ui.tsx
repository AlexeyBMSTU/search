import React from 'react';
import './styles.scss';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { DATA, ITEMS_COUNT } from '@/shared/consts/consts';
import hdl from '@/shared/handlerClick/handlerClick';
import animateNumber from '@/shared/animations/animations';
import generateDATAKey from '@/shared/generateKey/generateKey';

const NavigationButtons: React.FC = () => {
  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.activeIndex,
  );
  const isAnimationComplete = useSelector(
    (state: CircleProps) => state.circle.isAnimationComplete,
  );
  const [, , , , , handleClickItem] = hdl();

  const handleNavigation = (direction: number) => {
    if (!isAnimationComplete) return;

    const newIndex = (activeIndex + direction + ITEMS_COUNT) % ITEMS_COUNT;

    const circle = document.querySelector('.circle') as HTMLDivElement;

    const items = document.querySelectorAll('.item');

    const startKey = generateDATAKey(activeIndex);
    const endKey = generateDATAKey(newIndex);

    if (circle || items) {
      handleClickItem(newIndex, circle, items);
    }
    
    animateNumber(
      '.year-first',
      DATA[startKey].AGE_INTERVAL.FIRST,
      DATA[endKey].AGE_INTERVAL.FIRST,
    );
    animateNumber(
      '.year-second',
      DATA[startKey].AGE_INTERVAL.SECOND,
      DATA[endKey].AGE_INTERVAL.SECOND,
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
        disabled={activeIndex === ITEMS_COUNT - 1 || !isAnimationComplete}
      >
        &gt;
      </button>
    </div>
  );
};

export default NavigationButtons;
