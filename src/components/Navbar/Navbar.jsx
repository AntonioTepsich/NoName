import React from 'react';
import './Navbar.scss';
import avatar from '../../assets/avatar.png';
import {CartWidget} from '../index';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className='sticky z-50 w-screen p-6 px-16 top-0'>
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-2'>
            <p className='text-headingColor text-xl font-bold'>NoName</p>
        </div>
        <div className=' flex items-center gap-8'>
            <ul className='flex items-center gap-8 '>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to='/'>INICIO</Link></li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to="/category/electronics">ELECTRONICA</Link></li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to="/category/jewelery">JOYERIA</Link></li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to="/category/women's clothing">MUJERES</Link></li>
                <li className='text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><Link to="/category/men's clothing">HOMBRES</Link></li>
            </ul>

            <Link to='/cart'><CartWidget/></Link>
            <img src={avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' alt="usuario" />
        </div>
      </div>
      <div className='flex md:hidden w-full h-full '>
      </div>
    </header>
  )
}

export default Navbar
