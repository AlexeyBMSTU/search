import React from 'react';
import { Event } from '@/components/fact/components/event';
import './styles.scss';

const PlaceEvents: React.FC<Resolution> = ({ resolution }) => {
  return (
    <div className={'events ' + resolution}>
      <Event resolution={resolution} />
    </div>
  );
};

export default PlaceEvents;
