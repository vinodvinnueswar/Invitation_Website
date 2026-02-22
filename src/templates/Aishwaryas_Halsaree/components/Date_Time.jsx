import React from 'react'
import calender from '../assets/contacts/calender.png'
import location from '../assets/contacts/Location.png'
import phone from '../assets/contacts/Phone.png'

const Date_Time = () => {
  return (
    <div className="Date_Time_Container-Aishwaryas-Function">
          <h2>Party Details</h2>
        <div className="Date_Time_Details-Aishwaryas-Function">
            <h3>Date & Time</h3>
            <div className="full_view-Aishwaryas-Function">
            <img src={calender} alt="" />
            <p>Friday June 22nd, from <br /> 11:30 AM</p>
            <br />
            <img src={location} alt="" />
            <p>Location: <br />
                Grand Imperial 456 <br />
                celebration Rd,
                Hyderabad.
            </p>
            <br />
            <img src={phone} alt="" />
            <p>Contact : +91 923XXXXXX0</p>
            </div>

        </div>
    </div>
  )
}

export default Date_Time