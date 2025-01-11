import React from 'react';
import './styles.scss';
import { Circle } from '@/components/circle';
import { Navigation } from '@/components/navigation';
import { isMobile } from 'react-device-detect';
import { Paginate } from '@/components/paginate';
import { Fact } from '@/components/fact';
import { InteractiveButton } from '@/components/interactiveButton';
import { PlaceYears } from '@/components/interactiveYears';
import { Title } from '@/components/homeTitle';

const MobileHome = () => {
  return (
    <div className='container mobile'>
      <Title resolution='mobile' />
      <div className='container-interactive mobile'>
        <PlaceYears resolution='mobile' firstYear='2015' secondYear='2022' />
        <div className='line'></div>
        <div className='information-section mobile'>
          <Navigation />
          <Paginate />
          <Fact resolution='mobile' />
        </div>
      </div>
    </div>
  );
};
const DesktopHome = () => {
  return (
    <div className='container desktop'>
      <Title resolution='desktop' />
      <div className='container-interactive desktop'>
        <PlaceYears resolution='desktop' firstYear='2015' secondYear='2022' />
        <Circle />
      </div>
      <div className={'information-section desktop'}>
        <Navigation />
        <div className='interactive-info'>
          <InteractiveButton custom='prev' />
          <Fact resolution='desktop' />
          <InteractiveButton custom='next' />
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return <>{isMobile ? <MobileHome /> : <DesktopHome />}</>;
};

export default Home;
