import React, { useState } from 'react';
import './styles.scss';
import { itemAngles, itemDescription } from '@/shared/consts/consts';

const Item = ({
  index,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
  hoverIndex,
  animationComplete,
}: any) => {
  const hover = (
    <div style={{ transform: `rotate(${itemAngles[`Item ${index + 1}`]}deg)` }}>
      {index + 1}{' '}
    </div>
  );
  const active = <div>{index + 1}</div>;
  const showText = (
    <div style={{ opacity: '1' }} className='item-title'>
      {itemDescription[index]}
    </div>
  );
  const hideText = (
    <div style={{ opacity: '0' }} className='item-title'>
      {itemDescription[index]}
    </div>
  );
  return (
    <div className='item'>
      <div
        className={`item-container ${isActive ? 'active' : ''}`}
        onClick={() => onClick(index)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {hoverIndex ? hover : ''} {isActive ? active : ''}{' '}
      </div>
      {isActive && animationComplete ? showText : hideText}
    </div>
  );
};

export default Item;
