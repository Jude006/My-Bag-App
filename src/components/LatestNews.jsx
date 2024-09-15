import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function LatestNews() {
  return (
    <div className='font-mont mt-4 md:py-16 py-10'>
      <div className='text-center'>
        <h1 className='font-semibold'>Latest News</h1>
        <h2 className='font-normal text-lg'>The breaking news about Gardening & House plants</h2>
      </div>
      <div className='grid md:px-10 lg:px-24 px-8  justify-center items-center gap-8 mt-10 lg:grid-cols-3 grid-cols-1'>
        <div className='shadow-md p-3 rounded-md'>
            <div>
                <img src="/images/news1.webp" alt="" />
            </div>
            <div className='mt-4 flex flex-col gap-3'>
                <Link><h4 className='hover:text-primary duration-300 ease-in-out cursor-pointer'>Garden designers across the country forecast ideas shaping the gardening world in 2018</h4></Link>
                <p className='flex items-center gap-6 text-sm'><span className='flex items-center'><FaClock className='text-primary'/> 20 sept 2024 /</span> <span className='flex items-center'><FaUser className='text-primary'/> Jude Orifa</span></p>
                <p className='text-[14px]'>Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
            </div>
        </div>
        <div className='shadow-md p-3 rounded-md'>
        <div>
                <img src="/images/news3.webp" alt="" />
            </div>
            <div className='mt-4 flex flex-col gap-3'>
            <Link><h4 className='hover:text-primary duration-300 ease-in-out cursor-pointer'>2018 Midwest Tree and Shrub Conference: Resilient Plants for a Lasting Landscape Planting</h4></Link>
                <p className='flex items-center gap-6 text-sm'><span className='flex items-center'><FaClock className='text-primary'/> 20 sept 2024 /</span> <span className='flex items-center'><FaUser className='text-primary'/> Jude Orifa</span></p>
                <p className='text-[14px]'>Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
            </div>
        </div>
        <div className='shadow-md p-3 rounded-md'>
        <div>
                <img src="/images/news3.webp" alt="" />
            </div>
            <div className='mt-4 flex flex-col gap-3'>
            <Link><h4 className='hover:text-primary duration-300 ease-in-out cursor-pointer'>The summer coming up, it’s time for both us and the flowers to soak up the farmland</h4></Link>
                <p className='flex items-center gap-6 text-sm'><span className='flex items-center'><FaClock className='text-primary'/> 20 sept 2024 /</span> <span className='flex items-center'><FaUser className='text-primary'/> Jude Orifa</span></p>
                <p className='text-[14px]'>Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
