import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
const Cart = () => {
  const {cart} = useSelector((state)=> state);
  const [totalAmount , setTotalAmount] = useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc , curr) => acc + curr.price ,0 ));
  },[cart])
  return (
    <div>
      {
        cart.length >0 ?
        (<div className='flex max-w-[11/12] mx-auto'>
          <div>
            {
              cart.map((item ,index) => {
                return <CartItem key={item.id} item = {item} itemIndex={index}/>
              })
            }
          </div>

          <div className='max-w-['>
            <div>
              <div>Your Cart</div>
              <div> Summary</div>
              <p>
                <span>Total Items :{cart.length}</span> 
              </p>
            </div>

            <div>
              <p>Total Amount : ${totalAmount}</p>
            </div>

          </div>

        </div>):
        (<div className='flex flex-col justify-center items-center'>
            <div className='pt-52 flex flex-col  items-center'>
              <h1 className='text-[#374151] font-semibold text-[22px]'>Your cart is empty!</h1>
              <Link to='/' >
              <button className='bg-[rgb(22,163,74)] font-bold border-2 border-green-600 px-11 py-3 mt-8 rounded-md text-white hover:bg-white hover:text-green-700 transition duration-300 ease-in'>SHOP NOW</button>
              </Link>
            </div>
        </div>)
      }
    </div>
  )
};

export default Cart
