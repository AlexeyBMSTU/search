import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Item } from '@/components/circle/components/items';
import './styles.scss';
import { durationRotate, itemAngles } from '@/shared/consts/consts';
import updateAngle from '@/shared/updateAngle/updateAngle';

const Circle = () => {
  const [rotation, setRotation] = useState(0);
  const circleRef = useRef(null);
  const itemRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(5);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  const handleClickItem = (index: number) => {
    if (activeIndex === index) return;
    setIsAnimationComplete(false);

    setActiveIndex(index);
    const targetRotation = itemAngles[`Item ${index + 1}`];

    // Обновляем углы элементов
    Object.keys(itemAngles).forEach((key) => {
      itemAngles[key] -= targetRotation;
      updateAngle(key);
    });

    const newRotation = rotation + targetRotation;

    // Анимация вращения всего круга
    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: durationRotate,
      onComplete: () => setIsAnimationComplete(true),
    });
    gsap.to(itemRef.current, {
      rotation: -newRotation,
      duration: durationRotate,
    });

    setRotation(newRotation);

    setHoverIndex(null);
  };

  const items = Object.keys(itemAngles);

  return (
    <div className='circle' ref={circleRef}>
      <div className='science'>
        {items.map((item, index) => (
          <Item
            ref={activeIndex === index ? itemRef : ''}
            key={index}
            index={index}
            isActive={activeIndex === index}
            hoverIndex={hoverIndex === index && activeIndex !== index}
            onClick={() => handleClickItem(index)}
            onMouseEnter={() => {
              if (activeIndex !== index) {
                setHoverIndex(index);
              }
            }}
            onMouseLeave={() => setHoverIndex(null)}
            animationComplete={isAnimationComplete}
          >
            {item}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Circle;
