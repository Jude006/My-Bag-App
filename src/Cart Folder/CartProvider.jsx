import React,{useState,useEffect,createContext} from 'react'
 export const cartContext = createContext()

function CartProvider({children}) {
    const[cart,setCart] = useState([])

    useEffect(()=>{
        const savedCart = JSON.parse(localStorage.getItem('cart')) || []
        setCart(savedCart)
    },[])


    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    const addToCart = (product)=>{
        const existingProduct = cart.find(item=> item.id === product.id)
        if(existingProduct){
            alert('product is existing in your cart')
        }else{
            setCart([...cart,{...product,quantity:1}])
        }
    }

    const updateQuantities = (quantity,productId)=>{
        if(quantity <=0){
            setCart(cart.filter(item=>
                item.id !==productId
            ))
        }else{
            setCart(cart.map(item=>
                item.id === productId ? {...item,quantity}: item
            ))
        }
    }













    
    const removeProduct = (productId)=>{
        setCart(cart.filter(item=>
            item.id !==productId
        ))
    }

  return (
   <cartContext.Provider value={{cart,addToCart,updateQuantities,removeProduct}}>
    {children}
   </cartContext.Provider>
  )
}

export default CartProvider
