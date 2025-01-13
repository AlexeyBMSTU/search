import React from 'react';
import './styles.scss';
import { Circle } from '@/components/circle';
import { Navigate } from '@/components/navigation';
import { isMobile } from 'react-device-detect';
import { PlaceYears } from '@/components/interactiveYears';
import { Title } from '@/components/homeTitle';
import 'swiper/swiper-bundle.css';
import { Slider } from '@/components/swiper';
import { TitleTheme } from '@/components/titleTheme';

const MobileHome: React.FC = () => {
  return (
    <div className='container mobile'>
      <Title resolution='mobile' />
      <div className='container-interactive mobile'>
        <PlaceYears resolution='mobile' />
        <TitleTheme />
        <div className='line'></div>
        <div className='information-section mobile'>
          <Navigate />
          <div className='interactive-info'>
            <Slider resolution='mobile' />
          </div>
        </div>
      </div>
    </div>
  );
};
const DesktopHome: React.FC = () => {
  return (
    <div className='container desktop'>
      <Title resolution='desktop' />
      <div className='container-interactive desktop'>
        <PlaceYears resolution='desktop' />
        <Circle />
      </div>
      <div className={'information-section desktop'}>
        <Navigate />
        <div className='interactive-info'>
          <Slider resolution='desktop' />
        </div>
      </div>
    </div>
  );
};
const Home: React.FC = () => {
  return <>{isMobile ? <MobileHome /> : <DesktopHome />}</>;
};

export default Home;
