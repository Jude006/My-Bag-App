import React from 'react'
import bg from '../assets/images/about landing.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function AboutLandingPage() {
  return (
   <div>
    <Navbar />
     <div style={{backgroundImage: `url(${bg})`}} className='h-[70vh] bg-cover flex justify-start items-center text-white bg-center w-full '>
      <div className=' mx-auto flex justify-between items-center w-[80%]'>
        <h1 className=' md:text-5xl text-[29px]  font-bold'>About Us</h1>
        <h4 className='flex gap-2'>
           <Link to='/'><span>Home</span></Link>
           &gt;
           <Link to='/about'><span>About</span></Link>
        </h4>
      </div>
    </div>
   </div>
  )
}

export default AboutLandingPage
