import React from 'react';
import Banner from '../Banner/Banner';
import DreamsCar from '../DreamsCar/DreamsCar';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DreamsCar></DreamsCar>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;