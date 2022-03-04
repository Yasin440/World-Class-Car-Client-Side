import React from 'react';
import Banner from '../Banner/Banner';
import DreamsCar from '../DreamsCar/DreamsCar';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews';
import OurOffer from '../../../OurOffer/OurOffer';
import About from '../../../About/About';
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <OurOffer />
            <About />
            <DreamsCar />
            <div style={{
                backgroundColor: '#F0F0F0',
                paddingTop: '1px',
                paddingBottom: '5rem'
            }}>
                <Reviews />
            </div>
            <Portfolio />
            <Footer />
        </div >
    );
};

export default Home;