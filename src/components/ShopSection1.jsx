import React, { useState, useContext, useEffect, useRef } from 'react';
import Product from '../Json folder/Product.json';
import { FaDownLong } from 'react-icons/fa6';
import { cartContext } from '../Cart Folder/CartProvider';
import { FaTimes } from 'react-icons/fa';

function ShopSection1({ searchQuery }) { // Accept searchQuery as a prop
  const { addToCart } = useContext(cartContext);

  const [items, setItems] = useState(Product);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct,setSelectedProduct] =  useState(null)

  const openPopup  = (product)=>{
    setSelectedProduct(product)
  }
 const  closePopup = ()=>{
    setSelectedProduct(null)
  }

  useEffect(() => {
    if (searchQuery) {
      const filteredItems = Product.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setItems(filteredItems); // Update items based on search
    } else {
      setItems(Product); // If searchQuery is empty, show all items
    }
  }, [searchQuery]); // Run this effect whenever searchQuery changes

  const filterItems = (catItem) => {
    setSelectedCategory(catItem);
    const updateItems = Product.filter((curItem) => {
      return curItem.category === catItem || catItem === 'all';
    });
    setItems(updateItems);
  };

  const sortByPrice = () => {
    const sortingPrice = [...items].sort((a, b) => a.price - b.price);
    setItems(sortingPrice);
  };

  const sortAlphabetically = () => {
    const sortingAlphabetically = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortingAlphabetically);
  };

  const modalRef = useRef()
  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      setSelectedProduct(false)
    }
  }

  return (
    <div className='md:px-10 lg:px-24 px-8 mt-24 font-mont'>
      <div className='grid grid-cols-12 gap-6 my-16'>
        <div className='md:col-span-4 col-span-12 shadow py-10 px-6'>
          {/* Filter by category */}
          <div>
            <h3>Filter by category:</h3>
            <div className='flex flex-col gap-2 mt-4'>
              <div className='flex items-center gap-2'>
                <input type="radio" checked={selectedCategory === 'all'} onChange={() => filterItems('all')} />
                <span>All</span>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" checked={selectedCategory === 'Indoor Plant'} onChange={() => filterItems('Indoor Plant')} />
                <span>Indoor Plants</span>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" checked={selectedCategory === 'Outdoor Plant'} onChange={() => filterItems('Outdoor Plant')} />
                <span>Outdoor Plants</span>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" checked={selectedCategory === 'Flowering'} onChange={() => filterItems('Flowering')} />
                <span>Flowering</span>
              </div>
              <div className='flex items-center gap-2'>
                <input type="radio" checked={selectedCategory === 'Shrubs'} onChange={() => filterItems('Shrubs')} />
                <span>Shrubs</span>
              </div>
            </div>
          </div>

          {/* Sort items */}
          <div>
            <h1 className='flex items-center text-lg mt-10'>
              Sort by the following <FaDownLong />
            </h1>
            <div className='flex items-center gap-1 mt-2'>
              <button className='py-2 px-4 bg-secondary rounded' onClick={sortAlphabetically}>
                Sort Alphabetically
              </button>
              <button className='py-2 px-4 bg-primary text-white rounded' onClick={sortByPrice}>
                Sort by price
              </button>
            </div>
          </div>
          <div className='mt-10 py-4 px-2 rounded bg-slate-50'>
            <div c>
                <img src="/images/lilac.webp" alt='lilac plant' className='h-56 w-full object-cover object-top' />
            </div>
            <div className='text-start bg-slate-100 mt-2  font-bold flex flex-col gap-1 px-2 '>
                <p>Name:Lilac</p>
                <p>Buy and get free</p>
                <p>Category:shrub plant</p>
            </div>
          </div>
        </div>

        {/* Display products */}
        <div className='md:col-span-8 col-span-12 md:shadow py-10 md:px-10'>
          <div className='grid lg:grid-cols-2 gap-8 md:grid-cols-2 grid-cols-1 overflow-y-scroll h-[105vh]'>
            {items.map((item, index) => (
              <div key={index} className='bg-secondary md:mr-2 p-2 rounded flex flex-col gap-2'>
                <div className='w-full'>
                  <img src={item.image} alt={item.name} className='h-44 rounded-t w-full object-center object-cover' />
                </div>
                <div className='bg-white py-3 px-3 font-semibold'>
                  <p>Name: {item.name}</p>
                  <p>Price: ${item.price}.00</p>
                  <p>Category: {item.category}</p>
                  <div className='flex gap-4 py-2'>
                    <button className='py-2 px-3 rounded bg-primary' onClick={() => addToCart(item)}>
                      Add To Cart
                    </button>
                    <button className='py-2 px-3 rounded bg-secondary' onClick={()=>openPopup(item)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        {selectedProduct && (
            <div ref={modalRef}  onClick={closeModal} className='bg-primary cursor-pointer bg-opacity-30 w-full top-0 h-screen fixed inset-0 backdrop-blur-sm flex justify-center items-center'>
            <div className='lg:max-w-[60%] bg-white py-10 px-8 z-20 rounded-md top-0 z-20 mx-auto mt-20 '>
              <div className='flex justify-end' onClick={closePopup}>
                <h4 className='text-2xl place-self-end'><FaTimes /></h4>
              </div>
              <div className='grid md:grid-cols-2 grid-cols-1 md:items-start items-start w-full gap-6'>
                <div>
                  <img src={selectedProduct.image} alt="" className='h-48   object-cover md:h-fit '/>
                </div>
                <div className='flex flex-col gap-3 tracking-normal text-sm'>
                  <p><b>Name: </b>{selectedProduct.name}</p>
                  <p><b>scientific name: </b>{selectedProduct.scientific_name}</p>
                  <p><b>Origin: </b>{selectedProduct.origin}</p>
                  <p><b>Watering: </b>{selectedProduct.watering}</p>
                  <p><b>light: </b>{selectedProduct.light}</p>
                  <p><b>soil: </b>{selectedProduct.soil}</p>
                  <p><b>toxicity: </b>{selectedProduct.toxicity}</p>
                  <p><b>ideal_temperature: </b>{selectedProduct.ideal_temperature}</p>
                  <button className='py-2 px-3 rounded bg-primary' onClick={() => addToCart(selectedCategory)}>
                      Add To Cart
                    </button>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default ShopSection1;
