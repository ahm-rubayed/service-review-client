import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;