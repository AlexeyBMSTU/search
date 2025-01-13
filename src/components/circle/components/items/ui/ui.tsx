import React from 'react';
import './styles.scss';
import generateDATAKey from '@/shared/generateKey/generateKey';
import { DATA } from '@/shared/consts/consts';

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
    const key = generateDATAKey(index);
    const showText = (
      <div style={{ opacity: '1' }} className='item-title'>
        {DATA[key].TITLE}
      </div>
    );
    const hideText = (
      <div style={{ opacity: '0' }} className='item-title'>
        {DATA[key].TITLE}
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
