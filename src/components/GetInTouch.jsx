import React from 'react'

function GetInTouch() {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <div className=' bg-white py-16 grid gap-8 md:grid-cols-2 grid-cols-1 md:px-10 lg:px-24 px-8 font-mont'>
      <div className='md:px2 lg:px-4 shadow-sm'>
        <div>
            <h2>Get In Touch</h2>
            <p>Send us a message, we will call back later</p>
        </div>
        <form className='flex flex-col gap-4 p-2' onSubmit={handleSubmit}>
            <div className='flex md:flex-row flex-col justify-between mt-6 items-center w-full gap-6'>
                <input type="text"   className='py-3 px-6 focus:outline-none bg-primary bg-opacity-25 border-none' placeholder='Enter Your Name'/>
                <input type="email"  className='py-3 px-6 focus:outline-none bg-primary bg-opacity-25 border-none' placeholder='Enter Your Email'/>
            </div>
            <div>
                <input type="text" className='w-full py-3 px-6 focus:outline-none bg-primary bg-opacity-25 border-none  mt-3' placeholder='Subject' />
            </div>
            <div>
                <input type="text" className='w-full py-7 px-6 focus:outline-none bg-primary bg-opacity-25 border-none  mt-3' placeholder='Message' />
            </div>
            <button type='submit' className='bg-primary py-3 px-6 rounded focus:outline-none text-white mt-5'>Send Message</button>
        </form>
      </div>
      <div>
      <iframe className='w-[100%]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.566055642243!2d3.2526726999999998!3d6.7005412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b982c0e7e7441%3A0x8139e1c67977ee33!2sDalemo%20Estate!5e0!3m2!1sen!2sng!4v1726101901171!5m2!1sen!2sng"
       
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </div>
  )
}

export default GetInTouch
