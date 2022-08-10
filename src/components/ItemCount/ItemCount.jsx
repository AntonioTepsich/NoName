import React from 'react';
import './ItemCount.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";

const ItemCount = ({onConfirm, stock}) => {

    const [count,setCount]=useState(1)

    const handleConfirm = () => {
      if (count <= stock) {
        onConfirm(count)
      } 
      else {
        Swal.fire({
          icon: "alert",
          title: "Ups, lamentamos el incoveniente.",
          text: "Producto fuera de stock",
        });
      }
    };

    const handleAdd = () => {
      if ( count < stock) {
        setCount(count + 1)
      }
    }
    const handleSubstract = () => {
      if (count > 0) {
        setCount(count - 1)
      }
    }

  return (
    <div>
      <div className="prod-quant">
        <span className="prod-qty">
          <button onClick={handleSubstract} className='buttonRem'>-</button>
          <span className="qty-value">
            <span>{count}</span>
          </span>
          <button onClick={handleAdd} className='buttonAdd'>+</button> 
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