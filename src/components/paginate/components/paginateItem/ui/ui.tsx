import React from 'react';
import './styles.scss';

const PaginateItem: React.FC<PaginateItemProps> = (isActive) => {
  return (
    <>
      {isActive ? (
        <div className='paginate-item active'></div>
      ) : (
        <div className='paginate-item'></div>
      )}
    </>
  );
};

export default PaginateItem;
