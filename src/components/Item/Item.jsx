import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Item = ({product}) => {
    const handleAdd= () =>{
        console.log("Se agregó al carrito")
      }
  return (
    <div className="product-container" id={product.id}>
      <div className="product-card">
        <div className="card-img">
          <img src={product.img} alt="" />
        </div>
      
        <div className="card-info">
          
          <h2 className="name">
            Buzo
            <br/>
            {product.name}
          </h2>
          <h3 className="price">${product.price}</h3>
          <span className="rating">
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
          </span>
          <p>({product.review})</p>
        </div>
        <div className="card-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra ornare eros in imperdiet. </p>
            <ItemCount stock={product.stock} qty={1} handleAdd={handleAdd}/>
        </div>
      </div>
    </div>
  )
}

export default Item