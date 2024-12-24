import React from 'react'
import Cards from './Cards';
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Sign() {
  return (
 <>
 <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
 <div className='items-center justify-center text-center'>
  <h1 className='mt-16 text-2xl md:text-4xl'>Your Adventure Begins 
    <span className='text-pink-500'> Here!</span></h1>
    <p className='mt-10 text-black  dark:bg-slate-900 dark:text-white'>"Thank you for joining Travel Path! Explore curated travel guides, insider tips, and unforgettable experiences tailored just for you. Start your journey by exploring top destinations or creating your own travel plans. 
      Let’s make every trip an adventure to remember!"
    </p>
    <Link to="/">
    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
    </Link>
 </div>
 <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
     {
      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
     }
 </div>
 </div>
 </>
  );
}

export default Sign;
