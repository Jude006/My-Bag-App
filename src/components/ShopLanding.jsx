import React, { useState } from 'react';
import bg from '../assets/images/about landing.jpg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import ShopSection1 from './ShopSection1'; // Import ShopSection1

function ShopLanding() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  return (
    <div className='font-mont'>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className='h-[70vh] bg-cover flex flex-col justify-center items-start text-white bg-center w-full'
      >
        <div className='mx-auto flex justify-between items-center w-[80%]'>
          <h1 className='md:text-5xl text-[29px] font-bold'>Catalogue</h1>
          <h4 className='flex gap-2'>
            <Link to='/'><span>Home</span></Link>
            &gt;
            <Link to='/shop'><span>Shop</span></Link>
          </h4>
        </div>
        <div className='w-[80%] mx-auto mt-16'>
          <input
            type="text"
            className='py-4 px-6 rounded-full w-full focus:outline-none text-black border-none bg-white'
            placeholder='e.g Sun flower'
            onChange={handleSearchChange} // Handle search input change
          />
        </div>
      </div>

      {/* Pass the searchQuery state to the ShopSection1 component */}
      <ShopSection1 searchQuery={searchQuery} />
    </div>
  );
}

export default ShopLanding;
