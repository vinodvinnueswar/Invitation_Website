import React from 'react'
import instagram from '../assets/images/Social-media/instagram.png'
import facebook from '../assets/images/Social-media/communication.png'
import  whatsApp from '../assets/images/Social-media/whatsapp.png'

const Footer = () => {
  return (
    <div className="Footer">
      {/* FOOTER */}
      <div className="Footer-details">
        <div className="Footer-row">
          <div className="site-details">
          <h2>InviteDigitly</h2>
          <p>InviteDigitly is a premium platfrom dedicated to offering <br />
             beautiful and customizable digital invitations for all <br />
             your special occasions.
             </p>
        </div>
        <div className="categories-details">
          <h2>Categories</h2>
          <ul>
            <li>Wedding</li>
            <li>Birthday</li>
            <li>Half Saree</li>
            <li>House Warming</li>
          </ul>
        </div>
        <div className="Quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>Samples</li>
            <li>Reviews</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div> 
        </div>
        {/* fOOTER */}
        <footer className="footer">
          <div className="contact">
                <p>Phone : +91 9346999046 | Email : InviteDigitly@gmail.com</p>
          </div>
          <div className="Terms-Condtions">
                <p>Terms & Conditions | Privacy Policy</p>
          </div>
          <div className="Social-media">
                    <img src={instagram} alt="" />
                    <p>Instagram</p>
                    <img src={facebook} alt="" />
                    <p>Facebook</p>
                    <img src={whatsApp} alt="" />
                    <p>What'sapp</p>
          </div>
        </footer>
             
        </div>
</div>
  )
}

export default Footer