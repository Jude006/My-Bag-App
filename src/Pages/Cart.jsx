import React,{useContext, useRef, useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import { cartContext } from '../Cart Folder/CartProvider'
import { FaCartShopping } from 'react-icons/fa6'

function Cart() {
  const{cart,updateQuantities,removeProduct} = useContext((cartContext))
  const[showCart,setShowCart] = useState(false)
  const modalRef = useRef()


  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      setShowCart(false)
    }
  }

  const totalAmount = cart.reduce((acc,item)=> acc + item.quantity * item.price,0)
  const totalCount = cart.reduce((total , item)=> total + item.quantity,0)


  return (
    <div className='z-10'>
      <div className='absolute z-10' onClick={()=>setShowCart(true)}>
        <button className='py-5 right-2 px-4  rounded-full flex text-xl   fixed bottom-48  bg-primary hover:bg-opacity-75 hover:scale-90 duration-300 text-secondary'><FaCartShopping /><sup>{totalCount}</sup></button>
      </div>
      {showCart && <div ref={modalRef} onClick={closeModal} className='bg-black cursor-pointer bg-opacity-25 w-full inset-0 fixed h-screen backdrop-blur-sm flex justify-end top-0 z-10'>
        <div className='bg-white py-4 px-4 w-full md:w-[40%] h-full overflow-y-scroll max-w-md'>
          <div className='  flex justify-end mt-12' onClick={()=>setShowCart(false)}>
            <h1 className='place-self-end m-4 cursor-pointer'><FaTimes /></h1>
          </div>

          <div>
           {cart.length === 0 ? (
            <p className='text-red-400 font-bold text-lg'>Your cart is empty</p>
           ):(
            cart.map((item,key)=>(
              <div key={key} className='flex mb-6 gap-2 items-center shadow p-1'>
                <img src={item.image} alt=""  className='w-20 h-20 object-cover shadow'/>
                <div className='flex-1'>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <button className='py-3 px-2 bg-slate-50 rounded text-xl' onClick={()=>updateQuantities(item.quantity -1 ,item.id)}>-</button>
                  <p>{item.quantity}</p>
                   <button className='py-3 px-2 bg-slate-50 rounded text-xl' onClick={()=>updateQuantities(item.quantity 
                    +1 ,item.id)}> +</button>
                   <button className='py-3 px-2 rounded-md shadow text-red-800 hover:bg-red-100 duration-300 ' onClick={()=>removeProduct(item.id)}>Remove</button>
                </div>
              </div>
            ))
           )}
            <p className='text-2xl font-bold text-end text-red-500  my-10 h-28 py-10'>${totalAmount.toFixed(2)}</p>
          </div>
        </div>

       </div>}
    </div>
  )
}

export default Cart
