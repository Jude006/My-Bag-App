import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide components
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/pagination';  // Import Swiper pagination styles
import 'swiper/css/navigation';  // Import Swiper navigation styles
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../assets/images/testi1.webp'
import img2 from '../assets/images/testi2.webp'
import img3 from '../assets/images/testi3.webp'

function MySwiper() {
  return (
    <div className="mySwiperContainer md:px-10 lg:px-24 px-8 font-mont">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}  // Use the necessary Swiper modules
        spaceBetween={50} 
        slidesPerView={1} 
        autoplay={{
          delay: 4500, 
          disableOnInteraction: false, 
        }}
        pagination={{ clickable: true }}  
        loop={true} 
        className="testimony-swiper"
      >
        {/* Testimony Slide 1 */}
        <SwiperSlide>
          <div className="text-center flex md:flex-row flex-col  items-center gap-10 justify-between my-10">
            <img src={img1} alt="Testimony 1" className="h-40 w-40 rounded-full object-cover mb-6" />
          <div className=''>
          <h1 className="text-2xl font-bold">Jane Doe</h1>
            <p className="text-primary text-lg">CEO, Plantify Co.</p>
            <p className="mt-4 text-gray-600 px-4 md:px-16 ">
              "Plantify Co. has been life-changing for our home office! The plants are fresh, easy to care for, and add so much beauty to our environment."
            </p>
          </div>
          </div>
        </SwiperSlide>

        {/* Testimony Slide 2 */}
        <SwiperSlide>
          <div className="flex gap-10 md:flex-row flex-col items-center justify-between text-center my-10">
            <img src={img2} alt="Testimony 2" className="h-40 w-40 rounded-full object-cover mb-6" />
          <div>
          <h1 className="text-2xl font-bold">John Smith</h1>
            <p className="text-primary text-lg">Manager, Green Solutions</p>
            <p className="mt-4 text-gray-600 px-4 md:px-16 ">
              "I absolutely love the range of plants they offer! Their services are top-notch and their designs have transformed our office into a green oasis."
            </p>
          </div>
          </div>
        </SwiperSlide>

        {/* Testimony Slide 3 */}
        <SwiperSlide>
          <div className="flex gap-10 md:flex-row flex-col items-center justify-between text-center my-10">
           <div>
           <img src={img3} alt="Testimony 3" className="h-40 w-40 rounded-full object-cover mb-6" />
           </div>
           <div >
           <h1 className="text-2xl font-bold">Emily Watson</h1>
            <p className="text-primary text-lg">Interior Designer</p>
            <p className="mt-4 text-gray-600 px-4 md:px-16">
              "Working with Plantify Co. has been a dream! Their plants bring a whole new level of life to every space I design. Highly recommended!"
            </p>
           </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper;
