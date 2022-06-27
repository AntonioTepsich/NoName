import React from 'react';
import './ItemListContainer.scss';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

  const handleAdd= () =>{
    console.log("Se agregó al carrito")
  }
  
  return (
    <div className='box'>
        <h3 className='text-headingColor text-xl font-bold'>{greeting}</h3>
        <ItemCount handleAdd={handleAdd} qty={1} stock={3} />
    </div>
  )
}

export default ItemListContainer