import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {remove} from '../redux/Slices/CartSlice'
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  function removeCart()
  {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (
    <div className=' flex justify-between max-w-[600px] max-'>
      
        <div className='h-[180px]'>
          <img className='h-full ' src={item.image} alt="" />
        </div>

        <div className='flex flex-col w-[300px]'>
          <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>

          <div>
            <p>${item.price}</p>
            <div>
            <MdDelete onClick={removeCart} />
            </div>
          </div>
        </div>
      

    </div>
  )
}

export default CartItem
