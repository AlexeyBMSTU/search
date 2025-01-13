import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import generateDATAKey from '@/shared/generateKey/generateKey';
import { DATA } from '@/shared/consts/consts';

const TitleTheme: React.FC = () => {
  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.activeIndex,
  );
  const key = generateDATAKey(activeIndex);
  const theme = DATA[key].TITLE;
  if (!theme) return;
  return <div className='theme'>{theme}</div>;
};

export default TitleTheme;
