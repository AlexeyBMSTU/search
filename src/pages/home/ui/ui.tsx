import React from 'react';
import './styles.scss';
import { Circle } from '@/components/circle';
import { Navigation } from '@/components/navigation';
import { isMobile } from 'react-device-detect';

const MobileHome = () => {
  return (
    <div className='container mobile'>
      <div className='title mobile'>
        <span className='title-description mobile'>Исторические даты</span>
      </div>
      <div className='container-interactive mobile'>
        <div className='years mobile'>
          <div className='year year-2015 mobile'>2015</div>
          <div className='year year-2022 mobile'>2022</div>
        </div>
        <div className='line'></div>
        <div className='information-section mobile'>
          <Navigation />
          <div className='paginate'>
            <div className='paginate-line'>
              <div className='paginate-item'></div>
              <div className='paginate-item'></div>
              <div className='paginate-item'></div>
              <div className='paginate-item'></div>
              <div className='paginate-item'></div>
              <div className='paginate-item active'></div>
            </div>
          </div>
          <div className='interactive-info'>
            <div className='events'>
              <div className='event mobile'>
                <h3>2015</h3>
                <p>
                  13 сентября — частное солнечное затмение, видимое в Южной
                  Африке и части Антарктиды
                </p>
              </div>
              <div className='event mobile'>
                <h3>2016</h3>
                <p>
                  Телескоп «Хаббл» обнаружил самую удалённую из всех
                  обнаруженных галактик, получившую обозначение GN-z11
                </p>
              </div>
              <div className='event mobile'>
                <h3>2017</h3>
                <p>
                  Компания Tesla официально представила первый в мире
                  электрический грузовик Tesla Semi
                </p>
              </div>
              <div className='event mobile'>
                <h3>2017</h3>
                <p>
                  Компания Tesla официально представила первый в мире
                  электрический грузовик Tesla Semi
                </p>
              </div>
              <div className='event mobile'>
                <h3>2017</h3>
                <p>
                  Компания Tesla официально представила первый в мире
                  электрический грузовик Tesla Semi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DesktopHome = () => {
  return (
    <div className='container desktop'>
      <div className='title desktop'>
        <span className='title-description desktop'>Исторические даты</span>
      </div>
      <div className='container-interactive desktop'>
        <div className='years desktop'>
          <div className='year year-2015 desktop'>2015</div>
          <div className='year year-2022 desktop'>2022</div>
        </div>
        <Circle />
      </div>
      <div className={'information-section desktop'}>
        <Navigation />
        <div className='interactive-info'>
          <div className='event__prev-button'>
            <img
              className='prev-button'
              src='https://github.com/AlexeyBMSTU/search/blob/UX/src/static/photos/next-button.jpg?raw=true'
            ></img>
          </div>
          <div className='events desktop'>
            <div className='event desktop'>
              <h3>2015</h3>
              <p>
                13 сентября — частное солнечное затмение, видимое в Южной Африке
                и части Антарктиды
              </p>
            </div>
            <div className='event desktop'>
              <h3>2016</h3>
              <p>
                Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
                галактик, получившую обозначение GN-z11
              </p>
            </div>
            <div className='event desktop'>
              <h3>2017</h3>
              <p>
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </div>
            <div className='event desktop'>
              <h3>2018</h3>
              <p>
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </div>
            <div className='event desktop'>
              <h3>2019</h3>
              <p>
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </div>
            <div className='event desktop'>
              <h3>2020</h3>
              <p>
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </div>
          </div>
          <div className='event__next-button'>
            <img
              className='next-button'
              src='https://github.com/AlexeyBMSTU/search/blob/UX/src/static/photos/next-button.jpg?raw=true'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  return <>{isMobile ? <MobileHome /> : <DesktopHome />}</>;
};

export default Home;
