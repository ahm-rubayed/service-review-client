import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Pricing></Pricing>
            <Footer></Footer>
        </div>
    );
};

export default Home;