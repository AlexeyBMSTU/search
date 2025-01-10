import React from 'react';
import { Item } from '../components/items';
import './styles.scss';

const Circle = () => {
  return (
    <div className='circle'>
      <div className='science'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Circle;
