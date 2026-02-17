import React from 'react'
import GoldTag from '../assets/images/Gold_TagLine2.png'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
         <h1 className='logo'>InviteDigitly </h1> <br />
         <img className='Gold_Line' src={GoldTag} alt="" />
         <h2 className='text'>Online Invitation Website</h2>         
            {/* <ul className='nav-links'>
              <li>Home</li>
              <li>Categories</li>
              <li>Samples</li>
            </ul> */}
        </nav>
    </div>
  )
}

export default Navbar