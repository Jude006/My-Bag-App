import React,{useContext, useRef, useState} from 'react'
import Arrivals from '../Json folder/Arrivals.json'
import { FaChevronDown, FaHeart, FaTimes } from 'react-icons/fa'
import { cartContext } from '../Cart Folder/CartProvider'



function NewArrivals() {
    const{addToCart} = useContext(cartContext)
    const [selectedProduct,setSelectedProduct] = useState(null)
    const modalRef = useRef()

    const openPopup = (product)=>{
        setSelectedProduct(product)
    }
    const closePopup = ()=>{
        setSelectedProduct(null)
    }

    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            setSelectedProduct(false)
        }
    }


  return (
    <div className='bg-secondary py-16 md:px-10 lg:px-24  font-mont mt-10 px-8 md:py-24 '>
      <div className='text-center'>
        <h1>New Arrivals</h1>
        <p>We have the latest products, it must be exciting for you</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 mt-10'>
        {Arrivals.map((item,key)=>(
            <div key={key} className='relative flex group overflow-hidden duration-300 ease-linear flex-col justify-center items-center'>
                <div className='bg-secondary p-6'>
                    <img src={item.image} alt="" className='object-cover h-56 w-60'/>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
                <div className='flex items-center absolute top-44 hidden duration-300 ease-in-out group-hover:flex'>
                    <div className='text-3xl bg-black bg-opacity-50 text-white py-2.5 border-r   px-2'><FaHeart /></div>
                    <button className='py-3 px-4 bg-black bg-opacity-50 text-white border-r' onClick={()=>addToCart(item)}>Add To cart</button>
                    <button onClick={()=>openPopup(item)} className='text-3xl bg-black bg-opacity-50 text-white py-2.5 border-r   px-2'><FaChevronDown /></button>
                </div>
            </div>
        ))}
      </div>
      {selectedProduct && (
        <div ref={modalRef} onClick={closeModal} className='fixed cursor-pointer flex justify-center items-center top-0 z-10 inset-0 bg-primary bg-opacity-25 w-full h-screen backdrop-blur-sm'>
                <div className='bg-white relative mt-20 py-8 px-6 rounded-md flex flex-col justify-center items-center lg:max-w-[50%] w-full mx-auto shadow'>
                    <div className='place-self-end cursor-pointer' onClick={closePopup}>
                        <h1><FaTimes /></h1>
                    </div>
                    <div className='flex items-center justify-start gap-8 w-full my-2'>
                        <div className='p-2 border-secondary border'>
                            <img src={selectedProduct.image} alt="" className='h-44  object-cover'/>
                        </div>
                        <div>
                            <p className='text-2xl'>The {selectedProduct.name}</p>
                            <p className='text-xl'>${selectedProduct.price}</p>
                        </div>
                       
                    </div>
                    <div className='p-2'>
                            <p className='text-sm'>{selectedProduct.description}</p>
                            <ul className='mt-4 list-disc p-2'>
                                <li>Water Requirement: <b>{selectedProduct.water_requirement}</b></li>
                                <li>Light Requirement: <b>{selectedProduct.light_requirement}</b></li>
                                <li>Bloom Season: <b>{selectedProduct.bloom_season}</b></li>
                            </ul>
                        </div>
                        <div>
                            <button className='bg-primary hover:bg-opacity-70 duration-300 ease-in-out text-white py-2 px-2 shadow rounded absolute top-6 left-8 mb-2'>Hot</button>
                        </div>

                </div>
        </div>
      )}
    </div>
  )
}

export default NewArrivals
