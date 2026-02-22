import React from 'react'
import Intro from './components/Intro'
import Bride_Groom from './components/Bride_Groom'
import Photo_Gallery from './components/Photo_Gallery'
import Social_Share from './components/Social_Share'
import Footer from './components/Footer'
import Location from './components/Location'
import MusicPlayer from './components/MusicPlayer'
import Count_Down from './components/Count_Down'
import OpeningScreen from './components/OpenScreen'
import { useState } from 'react'
import './Rajat_Neha.css'

const Home = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className='Home-Rajat-Neha'>

        {/* Show Opening Screen First */}
      {!open && <OpeningScreen onOpen={() => setOpen(true)} />}

       {
        open && (
         <>
          <div className="Home-page-Rajat-Neha">
         <Intro/>
        <Bride_Groom/>
        <Photo_Gallery/>
        <Location/>
        <Count_Down/>
        <div className="Social-Footer-Rajat-Neha">
        <Social_Share/>
        <Footer/>
        <MusicPlayer/>
        </div>
       </div>
         <p className="mobile-note">
        This invitation is optimized for mobile , you have to experience on mobile 📱
      </p>
         </>
        )
       }
    </div>
  )
}

export default Home