import React from 'react'
import { FaAt } from 'react-icons/fa'

function AboutSection3() {
  return (
    <div className='bg-[#292929] mt-10 grid md:grid-cols-2 font-mont grid-cols-1 py-16 md:px-10 lg:px-24 px-8'>
      <div className='p-2 text-white'>
        <h2>Instagram Shop</h2>
        <h1 className='flex items-center'><FaAt /> JPLant</h1>
      </div>
      <div className='p-2  flex md:flex-row flex-col gap-2'>
        <img src="/images/plant1.jpg" alt=""  className='h-fit md:w-20 object-cover'/>
        <img src="/images/plant2.jpg" alt=""  className='h-fit md:w-20 object-cover'/>
        <img src="/images/plant3.jpg" alt=""  className='h-fit md:w-20 object-cover'/>
        <img src="/images/plant4.jpg" alt=""  className='h-fit md:w-20 object-cover'/>
        <img src="/images/plant5.jpg" alt=""  className='h-fit md:w-20 object-cover'/>
        <img src="/images/plant6.jpg" alt=""  className='h-fit md:w-20 object-cover'/>
      </div>
    </div>
  )
}

export default AboutSection3
