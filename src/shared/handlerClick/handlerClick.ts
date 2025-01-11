import {
  setActiveIndex,
  setAnimationComplete,
  setCurrentIndex,
  setRotation,
} from '@/store/reducers';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import compareToString from '../compareToString/compare';
import { durationRotate, itemAngles } from '../consts/consts';
import updateAngle from '../updateAngle/updateAngle';
import { gsap } from 'gsap';

export const hdl = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndex = useSelector((state: any) => state.circle.activeIndex);
  const rotation = useSelector((state: any) => state.circle.rotation);
  const isAnimationComplete = useSelector(
    (state: any) => state.circle.isAnimationComplete,
  );
  const dispatch = useDispatch();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleClickItem = (index: number, circle?: any, items?: any) => {
    if (activeIndex === index || !isAnimationComplete) return;
    dispatch(setAnimationComplete(false));
    dispatch(setActiveIndex(index));

    dispatch(setCurrentIndex(compareToString(index + 1)));
    if (circle) circleRef.current = circle;
    if (items) itemRefs.current = items;

    const targetRotation = itemAngles[`Item ${index + 1}`];
    Object.keys(itemAngles).forEach((key) => {
      itemAngles[key] -= targetRotation;
      updateAngle(key);
    });

    const newRotation = rotation + targetRotation;

    // Анимация вращения всего круга
    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: durationRotate,
      onComplete: () => {
        dispatch(setAnimationComplete(true));
        console.log(circleRef.current);
      },
    });

    itemRefs.current.forEach((item: any) => {
      if (item) {
        gsap.to(item, {
          rotation: -newRotation,
          duration: durationRotate,
        });
      }
    });

    dispatch(setRotation(newRotation));
    setHoverIndex(null);
  };
  return [
    circleRef,
    itemRefs,
    activeIndex,
    hoverIndex,
    isAnimationComplete,
    handleClickItem,
    setHoverIndex,
  ];
};
