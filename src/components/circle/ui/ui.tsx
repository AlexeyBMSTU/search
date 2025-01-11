import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Item } from '@/components/circle/components/items';
import './styles.scss';
import { itemAngles } from '@/shared/consts/consts';

const Circle = () => {
  const [rotation, setRotation] = useState(0);
  const circleRef: any = useRef(null);
  const [activeIndex, setActiveIndex] = useState(5);

  const handleClickItem = (index: any) => {
    setActiveIndex(index);
    const targetRotation = itemAngles[`Item ${index + 1}`];
    Object.keys(itemAngles).forEach((key) => {
      itemAngles[key] -= targetRotation;
      if (itemAngles[key] < 0) {
        itemAngles[key] += 360;
      }
    });
    const newRotation = rotation + targetRotation;

    // Анимация вращения всего круга
    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: 1,
    });

    setRotation(newRotation);
  };

  const items = Object.keys(itemAngles);

  return (
    <div className='circle' ref={circleRef}>
      <div className='science'>
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            isActive={activeIndex === index}
            onClick={() => handleClickItem(index)}
          >
            {item}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Circle;
