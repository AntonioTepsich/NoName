import React from 'react';
import { BsFillBasket3Fill } from "react-icons/bs";
import './Navbar.scss';
import avatar from '../../assets/avatar.png'

export const Navbar = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-2'>
            <p className='text-headingColor text-xl font-bold'>NoName</p>
        </div>
        <div className=' flex items-center gap-8'>
            <ul className='flex items-center gap-8 '>
                <li className='text-base text-Color cursor-pointer hover:text-headingColor duration-100'>Inicio</li>
                <li className='text-base text-Color cursor-pointer hover:text-headingColor duration-100'>Testimonios</li>
                <li className='text-base text-Color cursor-pointer hover:text-headingColor duration-100'>Sobre Nosotros</li>
                <li className='text-base text-Color cursor-pointer hover:text-headingColor duration-100'>Buzos</li>
            </ul>

            <div className='relative flex items-center justify-center'>
                <BsFillBasket3Fill className='text-textColor text-2xl cursor-pointer' />
                <div className=' absolute -top-2 -right-8 w-5 h-5 rounded-full bg-cartNumBg flex items-center  justify-center'>
                    <p className='text-xs text-white font-semibold'>2</p>
                </div>
            </div>
            <img src={avatar} className='w-9 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl' alt="usuario" />
        </div>
      </div>
      <div className='flex md:hidden w-full h-full '>
      </div>
    </header>
  )
}

export default Navbar
