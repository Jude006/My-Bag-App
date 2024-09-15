import React from 'react';
import img1 from '../assets/images/secH5.webp';
import img2 from '../assets/images/secH6.webp';
import img3 from '../assets/images/secH7.webp';
import img4 from '../assets/images/secH8.webp';

function HomeSection2() {
  return (
    <div className='bg-white py-20 md:px-10 lg:px-24 border-b border-secondary font-mont grid gap-20 grid-cols-12'>
      <div className='md:col-span-5 col-span-12 p-5'>
        <div className='w-full'>
          <div>
            <h2 className='text-2xl font-semibold uppercase'>About us</h2>
            <p>We are leading in the plants service fields</p>
            <p className='mt-10'>
              Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in scelerisque sem. Nulla sit amet varius nunc. Maecenas dui, tempur ullamcorper in.
            </p>
          </div>

          {/* Progress Bars */}
          <div className='mt-8 flex flex-col gap-6'>
            {/* Office Plants Progress Bar */}
            <div className='w-full'>
              <div className='flex items-center justify-between'>
                <p className='text-lg'>Office Plants</p>
                <p className='text-lg'>80%</p>
              </div>
              <div className='w-full h-4 bg-gray-200 rounded-full'>
                <div className='h-full bg-green-500 rounded-full' style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Field Manager Progress Bar */}
            <div className='w-full'>
              <div className='flex items-center justify-between'>
                <p className='text-lg'>Field Manager</p>
                <p className='text-lg'>70%</p>
              </div>
              <div className='w-full h-4 bg-gray-200 rounded-full'>
                <div className='h-full bg-green-500 rounded-full' style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Landscape Design Progress Bar */}
            <div className='w-full'>
              <div className='flex items-center justify-between'>
                <p className='text-lg'>Landscape Design</p>
                <p className='text-lg'>85%</p>
              </div>
              <div className='w-full h-4 bg-gray-200 rounded-full'>
                <div className='h-full bg-green-500 rounded-full' style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Garden Care Progress Bar */}
            <div className='w-full'>
              <div className='flex items-center justify-between'>
                <p className='text-lg'>Garden Care</p>
                <p className='text-lg'>65%</p>
              </div>
              <div className='w-full h-4 bg-gray-200 rounded-full'>
                <div className='h-full bg-green-500 rounded-full' style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className='md:col-span-7 col-span-12 p-6'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 justify-between'>
          <div className='flex flex-col gap-4'>
            <img src={img1} alt='' className='h-20 w-20 object-cover object-top' />
            <p className='text-xl font-semibold'>Quality Products</p>
            <p className='text-sm'>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={img2} alt='' className='h-20 w-20 object-cover object-top' />
            <p className='text-xl font-semibold'>Perfect Service</p>
            <p className='text-sm'>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={img3} alt='' className='h-20 w-20 object-cover object-top' />
            <p className='text-xl font-semibold'>100% Natural</p>
            <p className='text-sm'>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={img4} alt='' className='h-20 w-20 object-cover object-top' />
            <p className='text-xl font-semibold'>Environmentally friendly</p>
            <p className='text-sm max-w-[90%]'>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
