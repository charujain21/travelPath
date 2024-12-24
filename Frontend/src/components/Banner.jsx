import React from 'react'

const Banner = () => {
  return (
<>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 text-black dark:bg-slate-900 dark:text-white'>
<div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
<div className='space-y-12'>
<h1 className='text-4xl font-bold'>Your Travel Guide and <span className='text-pink-500'>Companion!!!</span></h1>
<p className='text-xl font-semibold'>Explore destinations, discover hidden gems, and create unforgettable memories.
 Let our travel guide lead the way for a seamless and enriching journey.</p>
 <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow text-white" placeholder="Enter Email" />
</label>
</div>
<button className="btn mt-6 btn-secondary">Add Email</button>
</div>
<div className='order-1 w-full md:w-1/2'>
<img
  src="https://static.vecteezy.com/system/resources/previews/011/200/154/original/travelling-vacation-design-illustration-free-png.png"
  className="w-[510px] h-[510px] mx-24"
  alt=""
/>

</div>      
</div>
</>
 )
}

export default Banner
