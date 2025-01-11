import React from 'react';
import { PaginateItem } from '@/components/paginate/components/paginateItem';
import './styles.scss';

const PaginateLine = () => {
  return (
    <div className='paginate-line'>
      <PaginateItem />
      <PaginateItem />
      <PaginateItem />
      <PaginateItem />
      <PaginateItem />
      <PaginateItem isActive={true} />
    </div>
  );
};

export default PaginateLine;
