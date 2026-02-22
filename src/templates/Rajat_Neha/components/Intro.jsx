import React from 'react'
import Gold_Line from '../assets/Images/Gold_TagLine2.png'

const Intro = () => {
  return (
    <div className="Intro_Container-Rajat-Neha">
        <div className="gold-text">
            <div className='text-Rajat-Neha'>
            <h2>The Wedding of</h2>
                <h1>Rajat <br />& Neha
                </h1> 
        </div>    

        <div className="Gold_Line-Rajat-Neha">
            <img src={Gold_Line} alt="" />
        </div>   

        <div className="Quoate">
            <p>Two hearts, one promise, forever begins.</p>
        </div>  

        <br />
                 
                 <div className="Date">
                    <h3>Save the Date</h3> <br />
                    <p>Sunday, 30th June 2025 <br />
                       at 11:00 A.M
                    </p>
                 </div>
        
                 <br />
        
                 <div className="Place">
                    <h3>Royal Palace,</h3>
                    <p>456 Wedding lane , <br />
                       Hyderabad.
                    </p>
                 </div>
             
        
        </div>
    </div>
  )
}

export default Intro

