import React from 'react';
import './styles.scss';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { itemsCount } from '@/shared/consts/consts';
import { hdl } from '@/shared/handlerClick/handlerClick';

const NavigationButtons = () => {
  const activeIndex = useSelector((state: any) => state.circle.activeIndex);
  const isAnimationComplete = useSelector(
    (state: any) => state.circle.isAnimationComplete,
  );
  const [, , , , , handleClickItem] = hdl();
  const handlePrevious = () => {
    if (!isAnimationComplete) return;
    const newIndex = (activeIndex - 1 + itemsCount) % itemsCount;
    const circle: any = document.querySelector(`.circle`);
    if (circle) {
      const items: any = document.querySelectorAll(`.item`);
      handleClickItem(newIndex, circle, items);
    } else {
      handleClickItem(newIndex);
    }
  };

  const handleNext = () => {
    if (!isAnimationComplete) return;
    const newIndex = (activeIndex + 1) % itemsCount;
    const circle: any = document.querySelector(`.circle`);
    if (circle) {
      const items: any = document.querySelectorAll(`.item`);
      handleClickItem(newIndex, circle, items);
    } else {
      handleClickItem(newIndex);
    }
  };

  return (
    <div className='navigation-buttons'>
      <button
        className={
          isMobile
            ? 'navigation-buttons__button mobile'
            : 'navigation-buttons__button desktop'
        }
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className={
          isMobile
            ? 'navigation-buttons__button mobile'
            : 'navigation-buttons__button desktop'
        }
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default NavigationButtons;
