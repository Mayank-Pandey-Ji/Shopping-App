
import { useDispatch, useSelector } from 'react-redux'
import { add , remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({post}) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function remove_from_cart()
  {
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
  }
  function add_to_cart()
  {
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in  hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] 
    gap-3 p-4 mt-10 ml-5  rounded-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
      <div>
        <p className='text-gray-700 font-bold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+ "..."} </p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt="" className='h-full w-full'  />
      </div>

      <div className='flex justify-between w-full mt-5'>
        <p className='text-green-600 font-bold'>${post.price}</p>
        {
          cart.some((p) => p.id == post.id) ?
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase p-1 px-3 
            hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={remove_from_cart}>
            Remove Item
          </button>) :
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] uppercase p-1 px-3 
           hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={add_to_cart}>
            Add to Cart
          </button>)
        }
      </div>
      
    </div>
  )
}

export default Product
