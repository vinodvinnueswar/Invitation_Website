import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/template_Images/Rajat_Neha_Template.png'
import img2 from '../assets/template_Images/Raj_Rani_Template.png'
import img3 from '../assets/template_Images/Vinod_Vineela_Template.png'
import img4 from '../assets/template_Images/Namratas_Template.png'
import img5 from '../assets/template_Images/Aishwaryas_Template.png'

const Samples_Page = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

const templates = [
  {
    id: 1,
    imgSrc: img1,
    slug: "rajat-neha",
    category: "wedding"
  },
  {
    id: 2,
    imgSrc: img2,
    slug: "raju-rani",
    category: "wedding"
  },
  {
    id: 3,
    imgSrc: img3,
    slug: "vinod-vineela",
    category: "wedding"
  },
  {
    id: 4,
    imgSrc: img4,
    slug: "namratas-function",
    category: "halfsaree"
  },
  {
    id: 5,
    imgSrc: img5,
    slug: "aishwaryas-function",
    category: "halfsaree"
  }
];

  //   useEffect(() => {
  //   // simulate loading
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 500)
  // }, [])

  //  if (loading) {
  //   return <h2 style={{ textAlign: 'center' }}>Loading inventory...</h2>
  // }

  return (
    <div className="Inventory">
      <br />
      <br />

      <div className="Inventory-Details">
        <h2>Inventory</h2>
        <br />
        <p>Here the products to make your invitation more elegant</p>
      </div>

      <div className="Inventory-Products">
        {templates.length === 0 && <h3>No items found</h3>}

        {templates.map((item) => (
          <div className="card" key={item.id}  
          onClick={(e) => { 
             e.stopPropagation()
            navigate(`/template/${item.slug}`)}}
              style={{ cursor: "pointer" }}
          >
            <div className="Products">
              <img src={item.imgSrc} alt="product" />
            </div>

            <button
              className="btn-order"
              onClick={() => navigate('/Create_Invitation')}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Samples_Page