import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Item } from '@/components/circle/components/items';
import './styles.scss';
import { durationRotate, itemAngles } from '@/shared/consts/consts';
import updateAngle from '@/shared/updateAngle/updateAngle';

const Circle = () => {
  const items1 = Object.keys(itemAngles);
  const [rotation, setRotation] = useState(0);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(5);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  const handleClickItem = (index: number) => {
    if (activeIndex === index || !isAnimationComplete) return;
    setIsAnimationComplete(false);

    setActiveIndex(index);
    const targetRotation = itemAngles[`Item ${index + 1}`];

    console.log(
      `Current rotation: ${rotation}, Target rotation for Item ${index + 1}: ${targetRotation}`,
    );

    // Обновляем углы элементов
    Object.keys(itemAngles).forEach((key) => {
      itemAngles[key] -= targetRotation;
      updateAngle(key);
    });

    const newRotation = rotation + targetRotation;
    // Останавливаем текущие анимации перед началом новой
    gsap.killTweensOf(circleRef.current);
    itemRefs.current.forEach((item: any) => {
      gsap.killTweensOf(item);
    });
    // Анимация вращения всего круга
    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: durationRotate,
      onComplete: () => setIsAnimationComplete(true),
    });

    itemRefs.current.forEach((item: any) => {
      if (item) {
        gsap.to(item, {
          rotation: -newRotation,
          duration: durationRotate,
        });
      }
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
            ref={(el: any) => (itemRefs.current[index] = el)}
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
            rotate={-(rotation + itemAngles[`Item ${index + 1}`])}
          >
            {item}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Circle;
