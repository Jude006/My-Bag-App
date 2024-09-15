import React from 'react'
import img1 from '../assets/images/about 1.jpg'

function AboutSection1() {
  return (
   <section className='font-mont'>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 md:px-10 lg:px-24 px-8 my-20'>
    <div className='w-[80%] flex justify-center mx-auto'>
        <img src={img1} alt="" className='object-cover w-[100%]  brightness-95 object-top'/>
    </div>
    <div className=' py-16 px-6'>
        <div className='flex flex-col gap-2'>
            <h2 className='font-normal text-xl'>Welcome to JPlant</h2>
            <h1 className='text-[30px] text-primary'>Our Journey to Dreams</h1>
            <p className='text-[14px]'>Empowering all people to be plant people — a collection of articles from The Sill’s team of Plant Experts across a variety of plant care topics to inspire confidence in the next generation of plant parents. Welcome to Plant Parenthood™.</p>
            <p className='text-[14px]'>Luckily, we have a few ideas on watering for optimum plant health.The Lustria succulents and other smaller specimen</p>
           <div className='inline-block'>
           <button className='bg-primary py-3 px-8 text-white inline-block'>View the shop</button>
           </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default AboutSection1
