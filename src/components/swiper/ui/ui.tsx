import React from 'react';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import {
  DATA,
  MAX_SLIDE_COUNT_PER_VIEW,
  MAX_SLIDE_DISTANCE,
  NAVIGATION_SLIDE_FLAG,
  PAGINATION_SLIDE_FLAG,
} from '@/shared/consts/consts';
import { PlaceEvent } from '../components/event';
import generateDATAKey from '@/shared/generateKey/generateKey';

const Slider: React.FC<Resolution> = ({ resolution }) => {
  const activeIndex = useSelector(
    (state: CircleProps) => state.circle.activeIndex,
  );
  const key = generateDATAKey(activeIndex);
  const currentEvents = DATA[key].EVENTS;
  return (
    <Swiper
      spaceBetween={MAX_SLIDE_DISTANCE}
      slidesPerView={MAX_SLIDE_COUNT_PER_VIEW}
      navigation={NAVIGATION_SLIDE_FLAG}
      pagination={{ clickable: true, enabled: PAGINATION_SLIDE_FLAG }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {currentEvents.length > 0 ? (
        currentEvents.map((event: any) => (
          <SwiperSlide key={event.YEAR}>
            <PlaceEvent
              resolution={resolution}
              year={event.YEAR}
              description={event.DESCRIPTION}
            />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div>Нет доступных событий</div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
export default Slider;
