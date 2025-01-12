import React from 'react';
import './styles.scss';
import { Circle } from '@/components/circle';
import { Navigate } from '@/components/navigation';
import { isMobile } from 'react-device-detect';
import { Paginate } from '@/components/paginate';
import { InteractiveButton } from '@/components/interactiveButton';
import { PlaceYears } from '@/components/interactiveYears';
import { Title } from '@/components/homeTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Импортируйте стили Swiper
import { Navigation, Pagination } from 'swiper/modules'; // Импортируйте модули
import { Slider } from '@/components/fact';
import { TitleTheme } from '@/components/titleTheme';

const MobileHome = () => {
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
const DesktopHome = () => {
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
          {/* <InteractiveButton custom='prev' /> */}
          {/* <Fact resolution='desktop' /> */}
          <Slider resolution='desktop' />
          {/* <InteractiveButton custom='next' /> */}
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return <>{isMobile ? <MobileHome /> : <DesktopHome />}</>;
};

export default Home;
