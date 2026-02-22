import React from 'react'

const Location = () => {
  return (
    <div className="Location_Container">
        <h2 data-aos="fade-up">Location</h2> <br /><br />
        <div className="Iframe" data-aos="fade-up">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1948352.8209643392!2d76.00567135625002!3d17.489526899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb905b3c8bbac9%3A0xee7bf2c3ddccd3a5!2sRoyal%20Palace%20Function%20Hall.%20Opp%2C%20laal%20khabha!5e0!3m2!1sen!2sin!4v1770629943732!5m2!1sen!2sin"
             width="300"
             height="400"
             style={{border:0}} 
             allowfullscreen
             loading="lazy" 
             referrerpolicy></iframe>
        </div>
           
           <br />

         <div className="btn" data-aos="fade-up">
                <a href="https://maps.app.goo.gl/8UR4mD27MJDrA5cQ6">
                    view Location
                </a>
         </div>
         
    </div>
  )
}

export default Location