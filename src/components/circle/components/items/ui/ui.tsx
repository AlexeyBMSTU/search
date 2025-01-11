import React, { useState } from 'react';
import './styles.scss';

const Item = ({ index, isActive, onClick }: any) => {
  return (
    <div className='item'>
      <div
        className={`item-container ${isActive ? 'active' : ''}`}
        onClick={() => onClick(index)}
      ></div>
      {isActive ? <div className='item-title'>{index + 1}Ноябрь</div> : <></>}
    </div>
  );
};

export default Item;
