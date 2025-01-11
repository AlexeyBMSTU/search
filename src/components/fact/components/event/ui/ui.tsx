import React from 'react';
import './styles.scss';

const Event: React.FC<Resolution> = ({ resolution }) => {
  return (
    <>
      <div className={'event ' + resolution}>
        <h3>2015</h3>
        <p>
          13 сентября — частное солнечное затмение, видимое в Южной Африке и
          части Антарктиды
        </p>
      </div>

      <div className={'event ' + resolution}>
        <h3>2016</h3>
        <p>
          Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
          галактик, получившую обозначение GN-z11
        </p>
      </div>
      <div className={'event ' + resolution}>
        <h3>2017</h3>
        <p>
          Компания Tesla официально представила первый в мире электрический
          грузовик Tesla Semi
        </p>
      </div>
      <div className={'event ' + resolution}>
        <h3>2017</h3>
        <p>
          Компания Tesla официально представила первый в мире электрический
          грузовик Tesla Semi
        </p>
      </div>
      <div className={'event ' + resolution}>
        <h3>2017</h3>
        <p>
          Компания Tesla официально представила первый в мире электрический
          грузовик Tesla Semi
        </p>
      </div>
    </>
  );
};

export default Event;
