import React from 'react';
import './styles.scss';
import { PlaceEvents } from '../components/placeEvents';

const Fact: React.FC<Resolution> = ({ resolution }) => {
  return (
    <div className='interactive-info'>
      <PlaceEvents resolution={resolution} />
    </div>
  );
};

export default Fact;
