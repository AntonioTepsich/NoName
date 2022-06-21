import React from 'react';

import './Navbar.scss';
import avatar from '../../assets/avatar.png';
import {CartWidget} from '../index';

export const Navbar = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-2'>
            <p className='text-headingColor text-xl font-bold'>NoName</p>
        </div>
        <div className=' flex items-center gap-8'>
            <ul className='flex items-center gap-8 '>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Inicio</li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Testimonios</li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Nosotros</li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Buzos</li>
            </ul>

            <CartWidget />
            <img src={avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' alt="usuario" />
        </div>
      </div>
      <div className='flex md:hidden w-full h-full '>
      </div>
    </header>
  )
}

export default Navbar
