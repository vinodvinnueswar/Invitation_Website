import React from "react";
import { Link } from "react-router-dom";
import GoldTag from "../assets/images/Gold_TagLine2.png";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <h1 className="logo">InviteDigitly</h1>
        {/* <img className="Gold_Line" src={GoldTag} alt="tagline decoration" /> */}
        <p className="tagline">Elegant Digital Invitations for Every Celebration</p>
      </div>
      <br />

      {/* <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
        <li><Link to="/Samples">Samples</Link></li>
        <li><Link to="/Create_Invitation">Create Invitation</Link></li>
      </ul> */}

    </nav>
  );
};

export default Navbar;