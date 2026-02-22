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

  const templates= [
    { imgSrc: img1 ,slug : 'rajat-neha' },
    { imgSrc: img2 , slug : 'raju-rani'},
    { imgSrc: img3 , slug : 'vinod-vineela'},
    { imgSrc: img4 , slug : 'namratas-function'},
    { imgSrc: img5 , slug : 'aishwaryas-function'},
  ]

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

        {templates.map((item, index) => (
          <div className="card" key={index}  
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