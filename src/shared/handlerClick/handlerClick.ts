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
import compareToString from '../compareToString/compare';
import { DATA, DURATION_ROTATE } from '../consts/consts';
import updateAngle from '../updateAngle/updateAngle';
import generateDATAKey from '../generateKey/generateKey';

const hdl = () => {
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

  const animateObjects = () => {
    const informations = document.querySelectorAll('.event');
    const titleTheme = document.querySelector(`.theme`);
    const line = document.querySelector(`.line`);
    if (!informations || !titleTheme || !line) return;
    const objects = [informations, titleTheme, line];

    objects.forEach((object) => {
      gsap.fromTo(
        object,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: DURATION_ROTATE },
      );
    });
  };

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

export default hdl;
