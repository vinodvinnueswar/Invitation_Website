import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="Home">
      {/* HERO SECTION */}
    <section className="hero">
        <div className="hero-content">
        <h1>Create Beautiful Digital <br /> Invitation Cards</h1>
        <p>For Weddings, Birthdays & Special Occasions</p>
        <div className="hero-buttons">
         <button className="btn primary" onClick={() => navigate('/Create_Invitation')} >Create Your Invitation</button>
         <button className="btn secondary" onClick={ () => navigate('/Samples')}>View Samples</button>
       </div>
       </div>
   </section>
    </div>
  )
}

export default Hero