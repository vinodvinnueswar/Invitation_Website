
import React from 'react'
import Groom from '../assets/Bride_Groom/Groom (2).png'
import Bride from '../assets/Bride_Groom/Bride (2).png'

const Bride_Groom = () => {
  return (
    <div className="Bride_Groom-Raju-Rani" >
        <h2 data-aos="fade-up">Bride and Groom</h2>

        {/* Groom */}
        <div className="Groom" >
            <img src={Groom} alt=""  data-aos="fade-up"/> <br />
            <h3 data-aos="fade-up">Raju</h3> <br />
            <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quibusdam dolorum repellat ullam, saepe animi totam magni nostrum ipsam amet. Voluptates quod corrupti perspiciatis soluta, porro illo iste. Eum, quam.</p>
        </div>

        <br />

         {/* Bride */}
        <div className="Groom">
            <img src={Bride} alt="" data-aos="fade-up"/> <br />
            <h3 data-aos="fade-up">Rani</h3> <br />
            <p data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quibusdam dolorum repellat ullam, saepe animi totam magni nostrum ipsam amet. Voluptates quod corrupti perspiciatis soluta, porro illo iste. Eum, quam.</p>
        </div>
    </div>
  )
}

export default Bride_Groom