import React from 'react'
import Poster1 from '../assets/images/Poster_1.png'
import Poster2 from '../assets/images/Poster_2.png'
import Poster3 from '../assets/images/Poster_3.png'
import { useNavigate } from 'react-router-dom'

const Themes = () => {
  const navigate = useNavigate()

   const data = [
    {
      title: "Floral Wedding" ,image: Poster1,  
    },
     {
      title: "Floral Wedding" ,image: Poster2
    },
     {
      title: "Floral Wedding" ,image: Poster3
    }
   ]

  return (
    <div className="Themes">
        
{/* THEMES */}
<section className="themes">
<h2>Beautiful Digital Wedding Invitation Card Themes</h2> <br />
<h3>Exquisite Collection of Stunning & Customizable Wedding Invitation <br />
     Themes for Your Special Day</h3>
<div className="theme-grid">
{data.map(
(item, index) => (
<div className="theme-card" key={index}>
<div className="theme-img">
<img  src={item.image} alt={item.title} /> <br />
<button className="btn-theme" onClick={() => navigate('/samples')}>View Demo</button>
</div>
</div>
)
)}
</div>
</section>
    </div>
  )
}

export default Themes