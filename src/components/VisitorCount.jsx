import React, { useEffect, useState } from 'react'

function VisitorCount() {
    const[visitCount,setVisitCount] = useState(0)
    useEffect(()=>{
    const storedCount = localStorage.getItem("visitCount")

        if(storedCount){
            const newCount = parseInt(storedCount) + 1
            localStorage.setItem("visitCount",newCount)
            setVisitCount(newCount)
        }else{
            localStorage.setItem("visitCount",1)
            setVisitCount(1)
        }
    },[])
  return (
    <div className='h-screen bg-[#f0f0f]'>
      <button className='bg-red-500 py-3 px-8'>{visitCount}</button>
    </div>
  )
}

export default VisitorCount
