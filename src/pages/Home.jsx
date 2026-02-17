
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Themes from '../components/Themes'
import Footer from '../components/Footer'
import Context from '../components/Context'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Context/>
      <Themes/>
      <Features/>
      <Footer/>
      
    </>
  
  )
}

export default Home