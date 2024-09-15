import React from 'react'
import sub from '../assets/images/subscribe.png'


function NewsLetter() {
  return (
    <div className='font-mont bg-cover bg-center flex justify-center items-center md:px-16 md:py-10 py-10'  style={{ backgroundImage: `url(${sub})` }}>
    
      <div className='flex md:flex-row flex-col gap-4 justify-between w-full items-center px-4 md:px-20'>
        <div className='md:text-start text-center'>
            <p className='uppercase'>Join the Newsletter</p>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        </div>
        <div className='flex md:flex-row flex-col gap-2 items-center'>
            <input type="email" className='py-3 px-8 bg-primary bg-opacity-30 focus:outline-none border-none ' placeholder='Enter Your Email'/>
            <button className='py-3 px-6 bg-primary hover:bg-opacity-40'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
