import React from 'react';
import './styles.scss';
import { NavigationButtons } from '../components/buttons';
import { isMobile } from 'react-device-detect';

const Navigation = () => {
  return (
    <div className={isMobile ? 'navigation mobile' : 'navigation desktop'}>
      <span>06/06</span>
      <NavigationButtons />
    </div>
  );
};

export default Navigation;
