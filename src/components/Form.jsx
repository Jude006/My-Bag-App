import React from 'react'

function Form() {
  return (
    <div className='py-16 md:px-10 lg:px-24 px-4 font-mont'>
      <div>
        <h1 className='text-center font-dosis'>Contact Us Now!!!</h1>
        <p className='text-center'>Your feedback cultivates growth. Share your experience to help us enhance our plant-loving community. Fill the form today!</p>
      </div>

    <div className='flex md:flex-row flex-col w-full justify-between items-center  gap-10'>
    <form  action="https://formspree.io/f/mldrkokd"
  method="POST" className='mt-10 bg-secondary py-10 lg:px-4 px-2 lg:inline-block w-full'>
        <div className='flex md:flex-row flex-col justify-between gap-10 md:items-center'>
            <div className='flex flex-col'>
                <label htmlFor="name">Name:</label>
                <input type="text"  id="name" name='name' className='py-3 px-4 bg-primary bg-opacity-30 border-none focus:outline-none rounded-sm'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="email">Email:</label>
                <input type="email"  id="email" name='email'  className='py-3 px-4 bg-primary bg-opacity-30 border-none focus:outline-none rounded-sm'/>
            </div>
        </div>
        <div className='flex flex-col mt-4'>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"  className='border-none focus:outline-none bg-primary bg-opacity-30  py-10'></textarea>
        </div>
        <div className='flex justify-start items-center mt-4'>
            <button className='bg-primary py-3 px-6 rounded-dm text-white ' type='submit'>Send Feedback</button>
        </div>
      </form>
      <div className='md:h-96 md:mt-8 w-full object-cover'>
        <img src="/images/contact.jpg" alt="" className=' h-[100%] w-full object-cover'/>
      </div>
    </div>
    </div>
  )
}

export default Form
