import React, { useState } from 'react';
import Json from '../Json folder/Son1.json';

function HomeSection3() {
  const [flowers, setFlowers] = useState(Json);
  const [fade, setFade] = useState(false); 

  const filterFlowers = (catItem) => {
    setFade(true); // Trigger the fade-out first

    setTimeout(() => {
      const updateItem = Json.filter((curItem) => curItem.category === catItem);
      setFlowers(updateItem);
      setFade(false); // Trigger the fade-in after updating items
    }, 300); // Delay matches the fade-out duration
  };

  return (
    <div className='font-mont py-10 md:px-10 lg:px-24 px-8'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold capitalize'>OUR PORTFOLIO</h1>
        <p className='text-lg font-normal'>We devote all of our experience and efforts for creation</p>
      </div>
      <div>
        <div className='flex flex-wrap justify-center items-center px-10 gap-8 mt-8'>
          <button className='shadow p-2' onClick={() => { setFlowers(Json); setFade(false); }}>All</button>
          <button className='shadow p-2' onClick={() => filterFlowers('Coffee Design')}>Coffee Design</button>
          <button className='shadow p-2' onClick={() => filterFlowers('Garden')}>Garden</button>
          <button className='shadow p-2' onClick={() => filterFlowers('Home')}>Home Design</button>
          <button className='shadow p-2' onClick={() => filterFlowers('Office Design')}>Office Design</button>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 mt-10 ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          {flowers.map((item, key) => (
            <div key={key} className="text-center group overflow-hidden relative">
              <img src={item.image} alt="" className='h-64 w-full object-cover object-top' />
              <div className='absolute flex flex-col justify-center items-center top-0 inset-0 w-full text-center hidden group-hover:block duration-300 ease-in-out hover:bg-primary hover:bg-opacity-70 backdrop-blur-sm h-[100%] text-white'>
                <p className='text-2xl font-bold mt-24'>{item.name}</p>
                <p className='text-xl'>{item.description}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
