import React from 'react';
import './styles.scss';

const Title: React.FC<Resolution> = ({ resolution }) => {
  return (
    <div className={'title ' + resolution}>
      <span className={'title-description ' + resolution}>
        Исторические даты
      </span>
    </div>
  );
};

export default Title;
