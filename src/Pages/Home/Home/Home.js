import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Pricing from '../Pricing/Pricing';
import useTitle from '../../../hooks/useTitle';
import CustomService from '../CustomService/CustomService';

const Home = () => {
    useTitle("home")
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Pricing></Pricing>
            <CustomService></CustomService>
        </div>
    );
};

export default Home;