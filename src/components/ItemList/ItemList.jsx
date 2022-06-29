import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products}) => {
  return (
    <div className='card'>
        {products.map(prenda=>{
            return <Item product={prenda} key={prenda.id}/>
        })}
    </div>
  )
}

export default ItemList