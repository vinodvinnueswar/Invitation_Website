import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { API_Path } from "../helpers/ApiPath";

import weddingImg from "../assets/images/wedding.png";
import birthdayImg from "../assets/images/birthday.png";
import halfsareeImg from "../assets/images/half-saree.png";
import housewarmingImg from "../assets/images/house-warming.png";

const Categories = () => {
  const navigate = useNavigate();

  
  return (
    <section className="categories">
      <h2>Popular Categories</h2>

      {/* CATEGORY BUTTONS */}
      <div className="category-grid">
        <div className="category-card" onClick={() => navigate("/Inventory/wedding")} >
            <img src={weddingImg} alt="Wedding" className="category-img" />
          <h3>Wedding</h3>
    
        </div>

        <div className="category-card" onClick={() => navigate("/Inventory/birthday")}>
          <img src={birthdayImg} alt="Birthday" className="category-img" />
          <h3>Birthday</h3>
        </div>

        <div className="category-card" onClick={() => navigate("/Inventory/halfsaree")}>
          <img src={halfsareeImg} alt="Half Saree" className="category-img" />
          <h3>Half Saree</h3>
        </div>

        <div className="category-card" onClick={() => navigate("/Inventory/housewarming")}>
          <img src={housewarmingImg} alt="House Warming" className="category-img" />
          <h3>House Warming</h3>
        </div>
      </div>
    </section>

    
  );
};

export default Categories;
