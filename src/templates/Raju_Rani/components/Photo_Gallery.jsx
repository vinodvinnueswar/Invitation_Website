import React from 'react'
import Img1 from '../assets/Bride_Groom/Img-1.png'
import Img2 from '../assets/Bride_Groom/Img-2.png'
import Img3 from '../assets/Bride_Groom/Img-3.png'
import Img4 from '../assets/Bride_Groom/Img-4.png'
import LightGallery from "lightgallery/react";

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

]


const Photo_Gallery = () => {
  return (
    <div className="Photo_gallery-Raju-Rani">
        <h2 data-aos="fade-up">Our Gallery</h2>
        <div className="Gallery-Raju-Rani">
             <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
                {
                    data.map((item,index) => {
                        return(
                            <a className='Pics' href={item.imgsrc} key={index}>
                                <img src={item.imgsrc} alt="" data-aos="fade-right"/>
                            </a>
                        )
                    })
                }

            </LightGallery>
        </div>
    </div>
  )
}

export default Photo_Gallery