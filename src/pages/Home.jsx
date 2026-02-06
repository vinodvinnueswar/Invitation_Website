
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Themes from '../components/Themes'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Themes/>
      <Features/>
      <Footer/>
      
    </>
  
  )
}

export default Home