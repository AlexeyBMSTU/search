import React from 'react';
import './styles.scss';
import { HOME_TITLE } from '@/shared/consts/consts';

/**
 * Компонент заголовка домашней страницы
 * @param resolution Разрешение
 * @returns
 */
const Title: React.FC<Resolution> = ({ resolution }) => {
  return (
    <div className={'title ' + resolution}>
      <span className={'title-description ' + resolution}>{HOME_TITLE}</span>
    </div>
  );
};

export default Title;
