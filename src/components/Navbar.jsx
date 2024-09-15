import React, { useState, useEffect,useContext } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { cartContext } from '../Cart Folder/CartProvider';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const{cart} = useContext(cartContext)
  const totalCount = cart.reduce((total,item)=> total + item.quantity,0)

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true); 
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`font-mont flex flex-col justify-between w-full left-0 z-50 transition-all duration-300 ${
        isSticky ? 'fixed duration-300 ease-in-out bg-black py-3 text-white shadow-lg' : 'absolute top-6 bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center w-[85%] mx-auto py-3'>
        <Link to='/'>
          <div>
            <h1 className='cursor-pointer text-2xl font-bold text-white '>JPl<span className='text-primary'>ant</span></h1>
          </div>
        </Link>
        <div className='md:flex hidden'>
          <ul className='no-underline flex items-center gap-[50px] cursor-pointer text-white'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
         
            <Link to='/contact'><li>Contact</li></Link>
            <Link><li className='flex gap-2 text-lg'><FaCartShopping /><sub >{totalCount}</sub></li></Link>
          </ul>
        </div>
        <div>
          <h3 className="text-white"><FaSearch /></h3>
        </div>
        <div
          className='text-2xl md:hidden flex cursor-pointer text-white'
          onClick={() => setShowNav(!showNav)}
        >
          <FaBars />
        </div>
      </div>
      {showNav && (
        <div className={`p-6 bg-white text-black w-full z-40`}>
          <ul className='no-underline flex flex-col gap-[40px] cursor-pointer'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/shop'><li>Shop</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link><li className='flex gap-2 text-lg'><FaCartShopping /><sub >{totalCount}</sub></li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
