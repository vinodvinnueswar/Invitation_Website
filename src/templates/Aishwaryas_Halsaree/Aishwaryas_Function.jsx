import React from 'react'
import Intro from './components/Intro'
import Photo_Gallery from './components/Photo_Gallery'
import Invite_Details from './components/Invite_Details'
import Date_Time from './components/Date_Time'
import Location from './components/Location'
import Best_Wishes from './components/Best_Wishes'
import Social_Share from './components/Social_Share'
import './Aishwaryas.css'

const Home = () => {
  return (
    <div className='Home-Aishwaryas-Function'>
         <div className="Home-page-Aishwaryas-Function">
              <Intro/>
              <Invite_Details/>
              <Date_Time/>
              <Location/>
              <Photo_Gallery/>
              <Best_Wishes/>
              <Social_Share/>
         </div>
        <p className="mobile-note">
        This invitation is optimized for mobile , you have to experience on mobile 📱
      </p>
    </div>
  )
}

export default Home