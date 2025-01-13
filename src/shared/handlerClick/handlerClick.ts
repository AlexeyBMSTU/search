import {
  setActiveIndex,
  setAnimationComplete,
  setCurrentIndex,
  setRotation,
} from '@/store/reducers/reducers';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import compareToString from '@/shared/compareToString/compare';
import { DATA, DURATION_ROTATE } from '@/shared/consts/consts';
import updateAngle from '@/shared/updateAngle/updateAngle';
import generateDATAKey from '@/shared/generateKey/generateKey';
import { animateObjects } from '@/shared/animations/animations';

/**
 * Хук для управления анимацией и состоянием круга
 * @returns @param circleRef Ссылка на текущий круг
 * @returns @param itemRefs Ссылка на текущие элементы на круге
 * @returns @param activeIndex Активный индекс
 * @returns @param hoverIndex Индекс элемента круга с эффектом "hover"
 * @returns @param isAnimationComplete Флаг окончания всех анимаций на странице
 * @returns @param handleClickItem Хендлер для клика по элементу
 * @returns @param setHoverIndex Сеттер текущего индекса в эффект "hover"
 */
const useHendler = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.activeIndex,
  );
  const rotation = useSelector((state: CircleProps) => state.circle.rotation);
  const isAnimationComplete = useSelector(
    (state: CircleProps) => state.circle.isAnimationComplete,
  );

  const dispatch = useDispatch();

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && isMobile) {
      animateObjects();
    }
  }, [isVisible]);

  const handleClickItem = (
    index: number,
    circle?: HTMLDivElement | null,
    items?: any,
  ): void => {
    if (activeIndex === index || !isAnimationComplete) return;
    dispatch(setAnimationComplete(false));
    dispatch(setActiveIndex(index));

    dispatch(setCurrentIndex(compareToString(index + 1)));
    if (circle) circleRef.current = circle;
    if (items) itemRefs.current = items;

    const key = generateDATAKey(index);
    const targetRotation = DATA[key].ANGLE;

    Object.keys(DATA).forEach((key) => {
      const typedKey = key as keyof typeof DATA;
      DATA[typedKey].ANGLE -= targetRotation;
      updateAngle(typedKey);
    });

    const newRotation = rotation + targetRotation;
    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: DURATION_ROTATE,
      onComplete: () => {
        dispatch(setAnimationComplete(true));
        setIsVisible(false);
      },
    });

    itemRefs.current.forEach((item: HTMLDivElement | null) => {
      if (item) {
        gsap.to(item, {
          rotation: -newRotation,
          duration: DURATION_ROTATE,
        });
      }
    });

    dispatch(setRotation(newRotation));
    setHoverIndex(null);
    setIsVisible(true);
  };

  return [
    circleRef,
    itemRefs,
    activeIndex,
    hoverIndex,
    isAnimationComplete,
    handleClickItem,
    setHoverIndex,
  ] as const;
};

export default useHendler;
