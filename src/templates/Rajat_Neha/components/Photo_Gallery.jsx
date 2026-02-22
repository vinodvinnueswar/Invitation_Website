import React from 'react'
import Img1 from '../assets/Images/Bride_Groom/Img_1.png'
import Img2 from '../assets/Images/Bride_Groom/Img_2.png'
import Img3 from '../assets/Images/Bride_Groom/Img_3.png'
import Img4 from '../assets/Images/Bride_Groom/Img_4.png'
import Img5 from '../assets/Images/Bride_Groom/Img_5.png'
import Img6 from '../assets/Images/Bride_Groom/Img_6.png'
import Img7 from '../assets/Images/Bride_Groom/Img_7.png'
import Img8 from '../assets/Images/Bride_Groom/Img_8.png'
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
    <div className="Photo_Gallery-Rajat-Neha">
        <div className="gold-text">
            <br />
            <br />
            <h2>Our Gallery</h2>

            <div className="Pictures-Rajat-Neha">
                <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {
                    data.map((item,index) => {
                        return(
                            <a className='Pics-Rajat-Neha' href={item.imgsrc} key={index}>
                                <img src={item.imgsrc} alt="" />
                            </a>
                        )
                    })
                }

            </LightGallery>
            <br />
            <br />
        {/* Video */}
        <h2>Video</h2>
        <div className="Video-Player" data-aos="fade-up">
             <video controls autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>

            </div>

        </div>
    </div>
  )
}

export default Photo_Gallery