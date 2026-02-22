import React from 'react'
import Img1 from '../assets/Images/Bride_Groom/Img1.png'
import Img2 from '../assets/Images/Bride_Groom/Img2.png'
import Img3 from '../assets/Images/Bride_Groom/Img3.png'
import Img4 from '../assets/Images/Bride_Groom/Img4.png'
import Img5 from '../assets/Images/Bride_Groom/Img5.png'
import Img6 from '../assets/Images/Bride_Groom/Img6.png'
import Img7 from '../assets/Images/Bride_Groom/Img7.png'
import Img8 from '../assets/Images/Bride_Groom/Img8.png'
import LightGallery from "lightgallery/react";
import video from '../assets/video/vinod.mp4'


// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

   const data = [
                 {imgsrc : Img1},
                 {imgsrc : Img2},
                 {imgsrc : Img3},
                 {imgsrc : Img4},
                 {imgsrc : Img5},
                 {imgsrc : Img6},
                 {imgsrc : Img7},
                 {imgsrc : Img8},

   ]


const Photo_Gallery = () => {

  return (
    <div className="Photo_Gallery">
        <h2 data-aos="fade-up">Our Gallery</h2>
        <div className="Pictures">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {
                    data.map((item,index) => {
                        return(
                            <a className='Pics' href={item.imgsrc} key={index}>
                                <img src={item.imgsrc} alt="" data-aos="fade-up"/>
                            </a>
                        )
                    })
                }

            </LightGallery>
        {/* Video */}
        <div className="Video-Player" data-aos="fade-up">
             <video controls autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

        </div>
    </div>
  )
}

export default Photo_Gallery