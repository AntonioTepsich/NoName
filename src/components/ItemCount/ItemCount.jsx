import React from 'react';
import './ItemCount.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const ItemCount = ({onConfirm, stock}) => {

    const [count,setCount]=useState(1)

    const handleConfirm = () => {
      if (count <= stock) {
        onConfirm(count)
      } 
      else {
        alert("count > stock")
      }
    };

  return (
    <div>
      <div className="prod-quant">
        <span className="prod-qty">
          <button onClick={() => setCount(count => count-1)} className='buttonRem'>-</button>
          <span className="qty-value">
            <span>{count}</span>
          </span>
          <button onClick={() => setCount(count => count+1)} className='buttonAdd'>+</button> 
        </span>
      </div>
      <div className="prod-cta-order">
        <Button onClick={handleConfirm} className="cta-text">
          <FontAwesomeIcon className='cart' icon={faCartArrowDown} />
          AGREGAR
        </Button>
      </div>
    </div>
  )
}

export default ItemCount