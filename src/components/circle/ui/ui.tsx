import React, { useState } from 'react';
import { Item } from '../components/items';
import './styles.scss';

const Circle = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClickItem = (index: any) => {
    setActiveIndex(index);
  };
  return (
    <div className='circle'>
      <div className='science'>
        {Array.from({ length: 6 }).map((_, index) => (
          <Item
            key={index}
            index={index}
            isActive={activeIndex === index}
            onClick={handleClickItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Circle;
