import React from 'react';

function Map() {
  return (
    <div className='mt-20'>
      <div className='w-full'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.498186917695!2d3.235329374360477!3d6.708889020982524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b995b41b7dd6d%3A0xb6c08985374e0e09!2sAptech%20Computer%20Education%20-Sango%20Ota!5e0!3m2!1sen!2sng!4v1726440229379!5m2!1sen!2sng" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          width="100%" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
