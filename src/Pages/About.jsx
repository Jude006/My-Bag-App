import React from 'react'
import AboutLandingPage from '../components/AboutLandingPage'
import AboutSection1 from '../components/AboutSection1'
import AboutSection2 from '../components/AboutSection2'
import AboutSection3 from '../components/AboutSection3'
import AboutSection4 from '../components/AboutSection4'
import Footer from '../components/Footer'
// import Cart from './Cart'

function About() {
  return (
    <div>
    <AboutLandingPage />
    {/* <Cart /> */}
    <AboutSection1 />
    <AboutSection2 />
    <AboutSection3 />
    <AboutSection4 />
    <Footer />
    </div>
  )
}

export default About
