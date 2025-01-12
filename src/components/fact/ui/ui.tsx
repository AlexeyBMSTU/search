import React from 'react';
import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import {
  itemEvents,
  maxSlideCountPerView,
  maxSlideDistance,
  navigationSlideFlag,
  paginationSlideFlag,
} from '@/shared/consts/consts';
import { PlaceEvent } from '../components/event';

const Slider: React.FC<Resolution> = ({ resolution }) => {
  const activeIndex = useSelector((state: any) => state.circle.activeIndex) + 1;
  const currentEvents = itemEvents[activeIndex];
  console.log(currentEvents);
  return (
    <Swiper
      spaceBetween={maxSlideDistance}
      slidesPerView={maxSlideCountPerView}
      navigation={navigationSlideFlag}
      pagination={{ clickable: true, enabled: paginationSlideFlag }} // Включите пагинацию
      modules={[Navigation, Pagination]} // Укажите используемые модули
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
          <SwiperSlide key={event.year}>
            {' '}
            {/* Добавьте уникальный ключ для каждого слайда */}
            <PlaceEvent
              resolution={resolution}
              year={event.year}
              description={event.description}
            />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <div>Нет доступных событий</div> {/* Сообщение, если нет событий */}
        </SwiperSlide>
      )}
    </Swiper>
  );
};
export default Slider;
