import React from 'react';
import { BsFillBasket3Fill } from "react-icons/bs";
import './CartWidget.scss'

const CartWidget = () => {
  return (
    <div className='relative flex items-center justify-center'>
        <BsFillBasket3Fill className='text-textColor text-2xl  cursor-pointer' />
        <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center  justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
        </div>
    </div>
  )
}

export default CartWidget