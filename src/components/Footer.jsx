import React from 'react'
import img from '../assets/images/footer.jpg'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import img2 from '../assets/images/arr1.webp'
import img3 from '../assets/images/arr2.webp'

function Footer() {
  return (
    <div className='lg:h-[55vh] md:h-[69vh] h-[150vh] object-cover w-full  text-secondary bg-cover font-mont bg-center relative' style={{backgroundImage: `url(${img})`}}>
    <div className='absolute w-full top-0 left-0 h-full bg-green-900 bg-opacity-40'>
        <div className='grid py-16 lg:px-24 md:px-10 px-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between w-full '>
            <div className='flex flex-col gap-4'>
                <h1 className='text-white'>JPl<span className='text-primary'>ant</span></h1>
                <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                <div className='flex gap-2 items-center text-2xl'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook  />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter  />
      </a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        <FaGoogle />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram  />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  />
      </a>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Quick Link</h1>
                <ul className='flex gap-6 mt-4'>
                    <div className='flex flex-col gap-4 '>
                    <Link><li>Purchase</li></Link>
                        <Link><li>Payment</li></Link>
                        <Link><li>Return </li></Link>
                        <Link><li>Carrer</li></Link>
                        <Link><li>Policitians</li></Link>
                    </div>
                    <div  className='flex flex-col gap-4 '>
                        <Link><li>FAQS</li></Link>
                        <Link><li>News</li></Link>
                        <Link><li>Advertise</li></Link>
                        <Link><li>Carrer</li></Link>
                        <Link><li>Policitians</li></Link>
                    </div>
                </ul>
            </div>
            <div>
            <h1 className='text-2xl font-bold'>Best Seller </h1>
            <div className='mt-4 flex flex-col gap-6'>
                <div className='flex items-center gap-6'>
                    <img src={img2} alt="" className='h-20 w-20 object-cover' />
                    <div>
                        <p>Cactus flower</p>
                        <p>$10,08</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <img src={img3} alt="" className='h-20 w-20 object-cover' />
                    <div>
                        <p>Cactus flower</p>
                        <p>$10,08</p>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <h1 className='text-2xl font-bold'>Contact</h1>
            <ul className='flex flex-col gap-4'>
                <li>Address : <b>No1 Idowu Crescent</b></li>
                <li>Phone Number : <b>+2348068084957</b></li>
                <li>G-mail : <b>judeorifa28@gmail.com</b></li>
                <li>Open Hours: <b>Mon - sat 9-00am</b></li>
                <li>Happy Hours: <b>Sat -2pm - sho</b></li>
            </ul>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
