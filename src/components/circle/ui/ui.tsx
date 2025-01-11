import React from 'react';
import { Item } from '@/components/circle/components/items';
import './styles.scss';
import { itemAngles, items } from '@/shared/consts/consts';
import { hdl } from '@/shared/handlerClick/handlerClick';

const Circle = () => {
  const [
    circleRef,
    itemRefs,
    activeIndex,
    hoverIndex,
    isAnimationComplete,
    handleClickItem,
    setHoverIndex,
  ] = hdl();

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
          >
            {item}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Circle;
