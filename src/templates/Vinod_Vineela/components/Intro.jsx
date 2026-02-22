import React from 'react'
import Gold_Line from '../assets/Images/Gold_TagLine2.png'

const Intro = () => {

  return (
    <div className="Intro_Container-Vinod-Vineela">
        <div className="text-Vinod-Vineela" data-aos="fade-up">
        <h2>The Wedding of</h2>
        <h1>Venky & <br /> Vineela</h1>
        </div>
         
         <div className="Gold_Line-Vinod-Vineela">
            <img src={Gold_Line} alt="" data-aos="fade-up" />
         </div>

        <div className="Quoate" data-aos="fade-up">
            <p>Two hearts, one promise, forever begins.</p>
        </div>

        <br />
         
         <div className="Date">
            <h3 data-aos="fade-up">Save the Date</h3> <br />
            <p data-aos="fade-up">Sunday, 30th June 2025 <br />
               at 11:00 A.M
            </p>
         </div>

         <br />

         <div className="Place">
            <h3 data-aos="fade-up">Royal Palace,</h3>
            <p data-aos="fade-up">456 Wedding lane , <br />
               Hyderabad.
            </p>
         </div>

        <div className="Gold_Line2-Vinod-Vineela">
            <img src={Gold_Line} alt="" data-aos="fade-up" />
        </div>
        
        <br />

        <div className="text1">
            <p data-aos="fade-up">Join us for our special day <br />
               as we celebrate our Love <br />
               with family and friends.
            </p>
        </div>

    </div>
  )
}

export default Intro