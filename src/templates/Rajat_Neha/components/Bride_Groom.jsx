import React from 'react'
import Bride_Img from '../assets/Images/Bride_Groom/Bride.png'
import Groom_Img from '../assets/Images/Bride_Groom/Groom.png'

const Bride_Groom = () => {
  return (
    <div className="Bride_Groom-Rajat-Neha">
        <div className="gold-text">
            <h2>Bride and Groom</h2>
            <br />
         
         {/* Bride */}
         <div className="Bride-Rajat-Neha">
            <img src={Bride_Img} alt="" /> <br />
           <div className="gold-text">
             <h3>Neha</h3><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ratione doloremque, sint, voluptate quaerat rem laboriosam inventore et nihil natus autem eum quasi enim totam est vero? Nostrum, voluptates dolores?</p>
           </div>
         </div>

         <br />

         {/* Groom */}
         <div className="Bride-Rajat-Neha">
            <img src={Groom_Img} alt="" /> <br />
            <div className="gold-text">
            <h3>Rajat</h3><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ratione doloremque, sint, voluptate quaerat rem laboriosam inventore et nihil natus autem eum quasi enim totam est vero? Nostrum, voluptates dolores?</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Bride_Groom