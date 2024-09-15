import React from 'react'
import ContactLandingPage from '../components/ContactLandingPage'
import ContactSection1 from '../components/ContactSection1'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <ContactLandingPage />
      <ContactSection1 />
      <Map />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
