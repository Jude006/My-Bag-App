import React from 'react'
import 'flowbite'
import LandingPage from '../components/LandingPage'
import HomeSection1 from '../components/HomeSection1'
// import HomeSection2 from '../components/HomeSection2'
import HomeSection3 from '../components/HomeSection3'
import MySwiper from '../components/MySwiper'
import NewArrivals from '../components/NewArrivals'
import LatestNews from '../components/LatestNews'
import NewsLetter from '../components/NewsLetter'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
import Cart from './Cart'

function Home() {
  return (
    <div>
      <LandingPage />
      <Cart />
      <HomeSection1 />
      {/* <HomeSection2 /> */}
      <NewArrivals />
      <HomeSection3 />
      <MySwiper />
     
      <LatestNews />
      <NewsLetter />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Home
