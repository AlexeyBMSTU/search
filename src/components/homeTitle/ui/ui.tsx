import React from 'react';
import './styles.scss';
import { HOME_TITLE } from '@/shared/consts/consts';

const Title: React.FC<Resolution> = ({ resolution }) => {
  return (
    <div className={'title ' + resolution}>
      <span className={'title-description ' + resolution}>{HOME_TITLE}</span>
    </div>
  );
};

export default Title;
