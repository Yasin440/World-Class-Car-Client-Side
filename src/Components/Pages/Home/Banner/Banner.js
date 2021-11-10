import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.ibb.co/tLvN9m9/slider1.jpg" class="d-block w-100" alt="img" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3 style={{ borderBottom: '4px solid #1e88e5' }}>FIND YOUR DREAM</h3>
                        <h1 style={{ fontSize: '3.4rem' }}>Lamborghini Aventador</h1>
                        <h4>MODEL 2015 <span style={{ backgroundColor: '#1E88E5', padding: '5px 8px', fontWeight: 'bolder' }}>$184,900</span></h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://i.ibb.co/jb85XHj/slider2.jpg" class="d-block w-100" alt="img" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3 style={{ borderBottom: '4px solid #1e88e5' }}>FIND YOUR DREAM</h3>
                        <h1 style={{ fontSize: '3.4rem' }}>Lamborghini Aventador</h1>
                        <h4>MODEL 2015 <span style={{ backgroundColor: '#1E88E5', padding: '5px 8px', fontWeight: 'bolder' }}>$184,900</span></h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://i.ibb.co/pwpDg42/slider3.jpg" class="d-block w-100" alt="img" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3 style={{ borderBottom: '4px solid #1e88e5' }}>FIND YOUR DREAM</h3>
                        <h1 style={{ fontSize: '3.4rem' }}>Lamborghini Aventador</h1>
                        <h4>MODEL 2015 <span style={{ backgroundColor: '#1E88E5', padding: '5px 8px', fontWeight: 'bolder' }}>$184,900</span></h4>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;