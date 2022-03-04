import React from 'react';
import carRepair from '../../media/vehicle.png';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className='ourOffer about'>
            <div className="container">
                <div style={{ alignItems: 'center' }} className="row gx-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="contextBox">
                            <span className="topText mb-5" data-aos="fade-up">about world class car</span>
                            <h2 data-aos="fade-up">Know About World Class Car <br /><span>Quality Auto Repairs</span></h2>
                            <p className='mt-3' data-aos="flip-right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa tium doloremque laudantium, totam rem aperiam, eaque ipsa quae aillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                            <div className="text row">
                                <div className="icon col-2">
                                    <img className='flatIcon' src={carRepair} alt="icon" />
                                </div>
                                <div className='col-10 mt-1 mb-3' data-aos="flip-left">
                                    <h4>Experience & Professional</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptam accusium oloremque laudantium totam rem aperiam eaqipsa quae inventores veritatis et quasi architecto beatae vitdicta sunt explicabo emo enim ipsam voluptatem</p>
                                </div>
                            </div>
                            <div className="btnBox">
                                <Link className='themeBtn' to="/">Learn More <i className='fas fa-angle-double-right'></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="imgBox">
                            <figure className='image image1 m-0'>
                                <img src="http://azim.commonsupport.com/Fuzze/assets/images/resource/about-1.jpg" alt="" />
                            </figure>
                            <figure className='image image2 m-0'>
                                <img data-aos="flip-left" src="http://azim.commonsupport.com/Fuzze/assets/images/resource/about-2.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;