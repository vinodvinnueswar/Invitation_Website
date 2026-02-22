
import React from 'react'
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";
import Footer from './Footer';

const Social_Share = () => {
  const shareUrl = "https://vinod-vineela.vercel.app/";
  const title = "You're invited to our wedding! 💍";

  return (
    <div className="Social_Share">
        <h2 data-aos="fade-up">Social Share</h2> <br />
        <div className="Media" data-aos="fade-up">
            <h3 >Share Invitation</h3> <br />
            <div style={{display:"flex", gap:"15px", justifyContent:"center"}}>
                              
                                        <WhatsappShareButton url={shareUrl} title={title}>
                                            <WhatsappIcon size={40} round />
                                        </WhatsappShareButton>
                        
                                        <FacebookShareButton url={shareUrl} quote={title}>
                                            <FacebookIcon size={40} round />
                                        </FacebookShareButton>
                        
                                        <TwitterShareButton url={shareUrl} title={title}>
                                            <TwitterIcon size={40} round />
                                        </TwitterShareButton>
                        
                                        <LinkedinShareButton url={shareUrl} title={title}>
                                            <LinkedinIcon size={40} round />
                                        </LinkedinShareButton>
                        
         </div>
        </div> <br /><br />
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Social_Share