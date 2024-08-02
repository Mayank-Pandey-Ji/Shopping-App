import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading , setLoading] = useState(false);
    const [Posts , setPosts] = useState([]);
    async function fetchProductData()
    {
      setLoading(true);
      
      try{
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setPosts(data);
      }
      catch{
        console.log("error aa gaya");
      }
      setLoading(false);
      
    }

    useEffect(()=>{
      fetchProductData();
    } ,[]);

  return (
    <div>
      {
        loading ?
        (<Spinner/>) :
        (
          Posts.length >0 ?
          (<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {
              Posts.map((post)=>
                (
                  <Product key={post.id} post = {post}/>
                ))
            }
          </div>):
          (<p>no data found</p>)
        )
      }
    </div>
  )
}

export default Home
