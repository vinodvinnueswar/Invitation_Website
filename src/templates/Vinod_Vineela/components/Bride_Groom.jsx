import React from 'react'
import Bride_Img from '../assets/Images/Bride_Groom/Bride_Img.png'
import Groom_Img from '../assets/Images/Bride_Groom/Groom_Img.png'

const Bride_Groom = () => {
  return (
    <div className="Bride_Groom-Vinod-Vineela">
        <h2 data-aos="fade-up">Bride and Groom</h2>

        {/* Bride */}
        <div className="Bride-Vinod-Vineela">
            <img src={Bride_Img} alt="" data-aos="fade-up"/>
            <h3 data-aos="fade-up">Vineela</h3> <br />
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus alias tempore consequuntur, eos ratione minus et doloremque aliquam perspiciatis sunt recusandae laudantium assumenda deserunt nostrum dicta voluptatem nam quaerat?</p>
        </div>

        {/* Groom*/}
        <div className="Bride-Vinod-Vineela">
            <img src={Groom_Img} alt="" data-aos="fade-up" />
            <h3 data-aos="fade-up">Venky</h3> <br />
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus alias tempore consequuntur, eos ratione minus et doloremque aliquam perspiciatis sunt recusandae laudantium assumenda deserunt nostrum dicta voluptatem nam quaerat?</p>
        </div>
    </div>
  )
}

export default Bride_Groom