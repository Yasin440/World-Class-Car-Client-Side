import React from 'react';
import Banner from '../Banner/Banner';
import DreamsCar from '../DreamsCar/DreamsCar';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews';
import OurOffer from '../../../OurOffer/OurOffer';
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <DreamsCar />
            <OurOffer />
            <div style={{
                backgroundColor: '#e6e6e6fa',
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