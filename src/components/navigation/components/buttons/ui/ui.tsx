import React from 'react';
import './styles.scss';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import { ageIntervals, itemsCount } from '@/shared/consts/consts';
import {
  animateFirstNumber,
  animateSecNumber,
  hdl,
} from '@/shared/handlerClick/handlerClick';

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
    const intervals = {
      start: {
        first: ageIntervals[activeIndex + 1].first,
        second: ageIntervals[activeIndex + 1].second,
      },
      end: {
        first: ageIntervals[newIndex + 1].first,
        second: ageIntervals[newIndex + 1].second,
      },
    };
    if (circle) {
      const items: any = document.querySelectorAll(`.item`);
      handleClickItem(newIndex, intervals, circle, items);
      animateFirstNumber(
        ageIntervals[activeIndex + 1].first,
        ageIntervals[newIndex + 1].first,
      );
      animateSecNumber(
        ageIntervals[activeIndex + 1].second,
        ageIntervals[newIndex + 1].second,
      );
    } else {
      handleClickItem(newIndex, intervals);
      animateFirstNumber(
        ageIntervals[activeIndex + 1].first,
        ageIntervals[newIndex + 1].first,
      );
      animateSecNumber(
        ageIntervals[activeIndex + 1].second,
        ageIntervals[newIndex + 1].second,
      );
    }
  };

  const handleNext = () => {
    if (!isAnimationComplete) return;
    const newIndex = (activeIndex + 1) % itemsCount;
    const circle: any = document.querySelector(`.circle`);
    const intervals = {
      start: {
        first: ageIntervals[activeIndex + 1].first,
        second: ageIntervals[activeIndex + 1].second,
      },
      end: {
        first: ageIntervals[newIndex + 1].first,
        second: ageIntervals[newIndex + 1].second,
      },
    };
    if (circle) {
      const items: any = document.querySelectorAll(`.item`);
      handleClickItem(newIndex, intervals, circle, items);
      animateFirstNumber(
        ageIntervals[activeIndex + 1].first,
        ageIntervals[newIndex + 1].first,
      );
      animateSecNumber(
        ageIntervals[activeIndex + 1].second,
        ageIntervals[newIndex + 1].second,
      );
    } else {
      handleClickItem(newIndex, intervals);
      animateFirstNumber(
        ageIntervals[activeIndex + 1].first,
        ageIntervals[newIndex + 1].first,
      );
      animateSecNumber(
        ageIntervals[activeIndex + 1].second,
        ageIntervals[newIndex + 1].second,
      );
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
