import React from 'react';
import './styles.scss';
import { isMobile } from 'react-device-detect';

const NavigationButtons = () => {
  return (
    <div className='navigation-buttons'>
      <button
        className={
          isMobile
            ? 'navigation-buttons__button mobile'
            : 'navigation-buttons__button desktop'
        }
      >
        &lt;
      </button>
      <button
        className={
          isMobile
            ? 'navigation-buttons__button mobile'
            : 'navigation-buttons__button desktop'
        }
      >
        &gt;
      </button>
    </div>
  );
};

export default NavigationButtons;
