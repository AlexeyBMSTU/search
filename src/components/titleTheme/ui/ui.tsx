import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { itemDescription } from '@/shared/consts/consts';

const TitleTheme = () => {
  const activeIndex = useSelector((state: any) => state.circle.activeIndex);
  const theme = itemDescription[activeIndex];
  if (!theme) return;
  return <div className='theme'>{theme}</div>;
};

export default TitleTheme;
