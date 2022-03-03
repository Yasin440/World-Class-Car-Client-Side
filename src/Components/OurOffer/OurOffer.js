import React from 'react';
import './OurOffer.css';
import carRepair from '../../media/service.png';
import carRepair2 from '../../media/service (2).png';
import carRepair3 from '../../media/service (3).png';
import carRepair4 from '../../media/service (4).png';
import carRepair5 from '../../media/service (5).png';
import { Link } from 'react-router-dom';

const OurOffer = () => {
    return (
        <div className='ourOffer'>
            <div className="container">
                <div style={{ alignItems: 'center' }} className="row gx-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="row offerCard">
                            <div className="col-lg-6 col-md-6 col-sm-12 pe-0">
                                <div className="singleItem" data-aos="slide-up">
                                    <div className="icon">
                                        <img className='OfferIcon' src={carRepair2} alt="icon" />
                                    </div>
                                    <h3>Auto Glass Repair Services</h3>
                                </div>
                                <div className="singleItem" data-aos="slide-up">
                                    <div className="icon">
                                        <img className='OfferIcon' src={carRepair3} alt="icon" />
                                    </div>
                                    <h3>Online Customer Support Us</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pt-4 ps-0">
                                <div className="singleItem" data-aos="slide-up">
                                    <div className="icon">
                                        <img className='OfferIcon' src={carRepair4} alt="icon" />
                                    </div>
                                    <h3>Professional Auto Services Team</h3>
                                </div>
                                <div className="singleItem" data-aos="slide-up">
                                    <div className="icon">
                                        <img className='OfferIcon' src={carRepair5} alt="icon" />
                                    </div>
                                    <h3>Most Trusted Auto Repair Guarantee</h3>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="contextBox">
                            <span className="topText mb-5" data-aos="fade-up">WHAT WE OFFER</span>
                            <h2 data-aos="fade-up">Features For Dream<br /><span>Auto Glass Repair</span></h2>
                            <div className="text row">
                                <div className="icon col-1">
                                    <img className='flatIcon' src={carRepair} alt="icon" />
                                </div>
                                <p className='col-11 mt-4 mb-3' data-aos="flip-left">Sed ut perspiciatis unde omnis iste natus error sit voluptam accusium oloremque laudantium totam rem aperiam eaqipsa quae inventores veritatis et quasi architecto beatae vitdicta sunt explicabo emo enim ipsam voluptatem</p>
                            </div>
                            <div className="btnBox">
                                <Link className='themeBtn' to="/">Learn More <i className='fas fa-angle-double-right'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OurOffer;