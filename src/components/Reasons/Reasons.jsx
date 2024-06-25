import React from 'react'
import './Reasons.css'
import i1 from '../../assets/image1.png'
import i2 from '../../assets/image2.png'
import i3 from '../../assets/image3.png'
import i4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adi from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons" >
            <div className="left-r" data-aos="fade-left"
              data-aos-duration="1500">
                <img src={i1} alt="" />
                <img src={i2} alt="" />
                <img src={i3} alt="" />
                <img src={i4} alt="" />
            </div>

            <div className="right-r">
                <span>Some reasons</span>

                <div>
                    <span className data-aos="fade-down"
              data-aos-duration="1500">why </span>
                    <span>choose us?</span>
                </div>

                <div className='details-r' data-aos='fade-right'
        data-aos-duration='1500'>
                    <div><img src={tick} alt=""></img><span>OVER 140+ EXPERT COACHS</span></div>
                    <div><img src={tick} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE
                    </span></div>
                    <div><img src={tick} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER
                    </span></div>
                    <div><img src={tick} alt="" /><span>RELIABLE PARTNERS
                    </span></div>
                </div>
                <span style={{
                    color: "var(--gray",
                    fontWeight: "normal",
                }}>OUR PARTNERS</span>

                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adi} alt="" />
                    <img src={nike} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Reasons
