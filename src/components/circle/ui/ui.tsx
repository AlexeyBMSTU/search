import React from 'react';
import { Item } from '@/components/circle/components/items';
import './styles.scss';
import { ITEMS } from '@/shared/consts/consts';
import hdl from '@/shared/handlerClick/handlerClick';

const Circle: React.FC = () => {
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
        {ITEMS.map((_, index: number) => (
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
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default Circle;
