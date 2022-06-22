import React from 'react';
import './ItemListContainer.scss';

const ItemListContainer = ({greeting}) => {
  return (
    <div className='box'>
        <h3 className='text-headingColor text-xl font-bold'>{greeting}</h3>
    </div>
  )
}

export default ItemListContainer