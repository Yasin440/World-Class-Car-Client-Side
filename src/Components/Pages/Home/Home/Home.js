import React from 'react';
import Banner from '../Banner/Banner';
import DreamsCar from '../DreamsCar/DreamsCar';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <DreamsCar></DreamsCar>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    );
};

export default Home;