import React from 'react'
import coupleImg1 from '../assets/images/couple1.png'
import coupleImg2 from '../assets/images/couples2.png'
import coupleImg3 from '../assets/images/couples.jpg'

const Themes = () => {

   const data = [
    {
      title: "Floral Wedding" ,image: coupleImg2
    },
     {
      title: "Floral Wedding" ,image: coupleImg1
    },
     {
      title: "Floral Wedding" ,image: coupleImg2
    }
   ]

  return (
    <div className="Themes">
        
{/* THEMES */}
<section className="themes">
<h2>Beautiful Digital Wedding Invitation Card Themes</h2>
<h3>Exquisite Collection of Stunning & Customizable Wedding Invitation <br />
     Themes for Your Special Day</h3>
<div className="theme-grid">
{data.map(
(item, index) => (
<div className="theme-card" key={index}>
<div className="theme-img">
<img  src={item.image} alt={item.title} />
<button className="btn-theme">View Demo</button>
{/* <h3>{item.title}</h3> */}
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