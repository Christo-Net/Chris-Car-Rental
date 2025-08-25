import React from 'react'
import { useState } from 'react'
import { ArrowDown } from 'react-bootstrap-icons'
import ChooseUsImage from '../public/rolls-royce-2362821_1920-removebg-preview.png'

const ChooseUs = () => {
    
    const [visible,setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!visible)
    }


  return (
    <>
        <div className='container' style={{width: "100vw",backgroundColor: "rgb(14, 39, 78)", color: "white", padding: "50px", borderRadius: "50px"}}>
            <div className='row d-flex gap-5'>
                {/* first part */}
                <div className='col-lg-5 col-md-10 col-sm-10 mt-5'>
                    <div>
                        <h3>WHY CHOOSE CARVEO ?</h3>
                        <p>Elevate Your Journey with CARVEO the epitome of elegance and convenience service. Are you seeking a sleek luxury vehicle for a grand entrance. <span id='readMoreText' style={{ display: visible ? 'block' : 'none' }} >A spacious SUV for a Comfy getaway, or a refined sedan for effortless city cruising, we provide an exclusive fleet tailored to your needs. Enjoy seamless booking, impeccable customer service, and transparent pricing, ensuring every ride is as smooth as it is sophisticated. Elevate your journey—choose excellence, choose us. Book your perfect ride today!</span></p>
                        <button className='mt-3' onClick={toggleVisibility} id='read'>{!visible ? 'Read More' : 'Show Less'} <ArrowDown /></button>
                    </div>

                    <div className='mt-5'>
                        <div className='row'>
                            <div className='col'>
                                <h5>24/7 Support</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='col'>
                                <h5>Affordable Price</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <h5>Easy to cancle</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <div className='col'>
                                <h5>RESERVE ANYTIME</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second part */}
                <div className='col-lg-5 col-md-10 col-sm-10'>
                    <img src={ChooseUsImage} alt="A car" style={{width: "56vw", transform: "rotate(-30deg)", margin: "0px 0 0 -115px"}} />
               </div>

            </div>
        </div>

    </>
)
}

export default ChooseUs