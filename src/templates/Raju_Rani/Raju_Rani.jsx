import React from 'react'
import Intro from './components/Intro'
import Bride_Groom from './components/Bride_Groom'
import Photo_Gallery from './components/Photo_Gallery'
import Location from './components/Location'
import Social_Share from './components/Social_Share'
import OpeningScreen from './components/OpenScreen'
import { useState } from 'react'
import Count_Down from './components/Count_Down'
import MusicPlayer from './components/MusicPlayer'
import './Raju_Rani.css'

const Home = () => {
   const [open, setOpen] = useState(false);
  return (
     <div className="Home-Raju-Rani">
      
        {/* Show Opening Screen First */}
      {!open && <OpeningScreen onOpen={() => setOpen(true)} />}

        {open && (
         <>
         <div className="Home-page-Raju-Rani">
         <Intro/>
        <Bride_Groom/>
        <Photo_Gallery/>
        <Location/>
        <Count_Down/>
        <Social_Share/>
        <MusicPlayer/>
        </div>
         <p className="mobile-note">
        This invitation is optimized for mobile , you have to experience on mobile 📱
      </p>
        </>
        )}
     </div>
  )
}

export default Home