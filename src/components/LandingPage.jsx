import React from 'react';
import slide1 from '../assets/images/slider1.webp';
import slide2 from '../assets/images/slider2.webp';
import Navbar from '../components/Navbar'; // Import the Navbar

function LandingPage() {
  return (
    <div className=''>
      <Navbar /> {/* Add the Navbar at the top */}
      <div id="default-carousel" className="relative duration-300" data-carousel="slide" data-carousel-interval="7000">
        {/* Carousel wrapper */}
        <div className="relative h-screen overflow-hidden md:h-screen lg:h-screen">
          {/* Slide 1 */}
          <div
            className="h-full bg-cover bg-center flex flex-col justify-center items-center text-center zoom-bg"
            data-carousel-item="active"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <h1 className='text-6xl mt-10 font-dosis capitalize font-extrabold tracking-wider text-white'>
              Embrace Nature's Colors and Beauty
            </h1>
            <p className='text-xl font-light text-white mt-4'>
              Transform your space into a vibrant, peaceful haven.
            </p>
            <div className='mt-4 flex items-center gap-6 font-semibold text-white'>
              <button className='btn'>Get Started</button>
              <button className='btc'>Contact Us</button>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="hidden h-full bg-cover bg-center flex flex-col justify-center items-center text-center zoom-bg"
            data-carousel-item
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <h1 className='text-6xl font-dosis mt-10 capitalize font-extrabold tracking-wider text-white'>
              Nurture Your Connection to the Earth
            </h1>
            <p className='text-xl font-light text-white mt-4'>
              Breathe life into your home with fresh greenery.
            </p>
            <div className='mt-4 flex items-center gap-6 font-semibold text-white'>
              <button className='btn'>Get Started</button>
              <button className='btc'>Contact Us</button>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="hidden h-full bg-cover bg-center  flex flex-col justify-center items-center text-center zoom-bg"
            data-carousel-item
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <h1 className='text-6xl font-dosis capitalize font-extrabold tracking-wider text-white'>
              Revitalize Your Home with Lush Greenery
            </h1>
            <p className='text-xl font-light text-white mt-4'>
              Create a serene, lively atmosphere with our finest plants.
            </p>
            <div className='mt-4 font-mont flex items-center gap-6 font-semibold text-white'>
              <button className='btn'>Get Started</button>
              <button className='btc'>Contact Us</button>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
