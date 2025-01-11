import React from 'react';
import './styles.scss';
import { itemDescription } from '@/shared/consts/consts';

const Item = React.forwardRef(
  (
    {
      index,
      isActive,
      onClick,
      onMouseEnter,
      onMouseLeave,
      hoverIndex,
      animationComplete,
    }: any,
    ref: any,
  ) => {
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
      <div id={index} className='item' ref={ref}>
        <div
          className={`item-container ${isActive ? 'active' : ''}`}
          onClick={() => onClick(index)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {hoverIndex || isActive ? <div>{index + 1}</div> : <></>}
        </div>
        {isActive && animationComplete ? showText : hideText}
      </div>
    );
  },
);

export default Item;
