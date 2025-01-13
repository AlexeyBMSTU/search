import React from 'react';
import './styles.scss';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { DATA, ITEMS_COUNT } from '@/shared/consts/consts';
import hdl from '@/shared/handlerClick/handlerClick';
import { animateNumber } from '@/shared/animations/animations';
import generateDATAKey from '@/shared/generateKey/generateKey';

/**
 * Компонент навигации на странице.
 *
 * Отвечает за изменение тем, анимации годов в завимости от темы
 * @returns
 */
const NavigationButtons: React.FC = () => {
  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.activeIndex,
  );
  const isAnimationComplete = useSelector(
    (state: CircleProps) => state.circle.isAnimationComplete,
  );
  const [, , , , , handleClickItem] = hdl();

  const disabledFlagNextButton = activeIndex === 0;

  const disabledFlagPrevButton = activeIndex === ITEMS_COUNT - 1;

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
        className={`navigation-buttons__button prev-button ${isMobile ? 'mobile' : 'desktop'} ${disabledFlagNextButton ? 'disabled' : ''} `}
        onClick={() => handleNavigation(-1)}
        disabled={disabledFlagNextButton}
      >
        {/* &lt; */}
      </button>
      <button
        className={`navigation-buttons__button next-button ${isMobile ? 'mobile' : 'desktop'} ${disabledFlagPrevButton ? 'disabled' : ''}`}
        onClick={() => handleNavigation(1)}
        disabled={disabledFlagPrevButton}
      >
        {/* &gt; */}
      </button>
    </div>
  );
};

export default NavigationButtons;
