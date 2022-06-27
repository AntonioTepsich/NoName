import React from 'react';
import './ItemCount.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

const ItemCount = ({handleAdd, stock, qty}) => {

    const [count,setCount]=useState(qty)

    const onAdd=()=>{
        if (count <= stock-1){
            setCount(count+1)
        }
    }
    const onDec=()=>{
        if (count!==1){
            setCount(count-1)
        }
    }

  return (
    <div className="product-container">
      <div className="product-card">
        <div className="card-img">
          <img src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf94859ad/products/AD_GQ2192/AD_GQ2192-1.JPG" alt="" />
        </div>
      
        <div className="card-info">
          
          <h2 className="name">
            Buzo
            <br/>
            Edicion Limitada
          </h2>
          <h3 className="price">$99.99</h3>
          <span className="rating">
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
            <FontAwesomeIcon className='i' icon={faStar}/>
          </span>
          <p>(84)</p>
        </div>
      
        <div className="card-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra ornare eros in imperdiet. </p>
          
          <div className="prod-quant">
            <span>Cantidad</span>
            <span className="prod-qty">
              <button onClick={onDec} className='buttonRem'>-</button>
              <span className="qty-value">
                <span>{count}</span>
              </span>
              <button onClick={onAdd} className='buttonAdd'>+</button> 
            </span>
          </div>
          
          <div className="prod-cta-order">
            <button onClick={handleAdd} className="cta-text">
              <FontAwesomeIcon className='cart' icon={faCartArrowDown} />
              AGREGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount