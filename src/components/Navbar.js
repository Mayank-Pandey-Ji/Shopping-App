import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import image from '../images/download.png'
import { useSelector } from 'react-redux';
const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    
    <div>
      <div className=' flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to='/'>
          <div className='ml-5'>
          <img src={image} className='h-14'/>
          </div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 m5-5 space-x-6'>
          <NavLink to='/'>
            <p>
              Home
            </p>
          </NavLink>
          <NavLink to='/cart'>
            <div className='relative'>
              {
                cart.length >0 && <div className='cccart absolute bg-[#50a060] text-xs px-[6px] rounded-full right-0 top-0' >{cart.length}</div>
              }
            </div>
            <IoCart className='text-3xl' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
