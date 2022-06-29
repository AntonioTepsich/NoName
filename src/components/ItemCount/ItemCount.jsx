import React from 'react';
import './ItemCount.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
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
    <div>
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
  )
}

export default ItemCount