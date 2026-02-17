import React from 'react'
import QR from '../assets/images/QR.webp'
import video from '../assets/videos/vinod.mp4'
import ShareImg from '../assets/images/Share_Img.png'

const Features = () => {
  return (
   <div className="Features">
    {/* SAMPLE VIDEOS */}
<section className="samples">
<h2>Watch Sample Invitations</h2>

<div className="features-Phone">
  <div className="features">
  <h2>Instant WhatsApp Sharing</h2>
  <h3>Share your digital invitation with <br />
      unlimited guests in one click</h3>
        <span>No Printing</span>
        <span>No Courier</span>
        <span>Eco Friendly</span>
        <div className="QR">
          <h2>QR Integration</h2>
          <img src={QR} alt="" />
        </div>
        </div>
        <div className="phone-wrapper">
          <img src={ShareImg} alt="" />
        </div>
        </div>
        </section>
          </div>
  )
}

export default Features