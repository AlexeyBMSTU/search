import React from 'react';
import './styles.scss';

const InteractiveButton: React.FC<InteractiveClassButton> = ({ custom }) => {
  return (
    <div className={`event__${custom}-button`}>
      <img
        className={`${custom}-button`}
        src='https://github.com/AlexeyBMSTU/search/blob/UX/src/static/photos/next-button.jpg?raw=true'
      ></img>
    </div>
  );
};

export default InteractiveButton;
