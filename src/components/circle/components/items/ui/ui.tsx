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
}: any) => {
  const hover = (
    <div style={{ transform: `rotate(${itemAngles[`Item ${index + 1}`]}deg)` }}>
      {index + 1}{' '}
    </div>
  );
  const active = <div>{index + 1}</div>;
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
      {isActive ? (
        <div className='item-title'>{itemDescription[index]}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
