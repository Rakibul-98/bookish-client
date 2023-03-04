import React from 'react';
import About from '../Components/About/About';
import Banner from '../Components/Banner/Banner';
import Categories from '../Components/Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Categories/>
        </div>
    );
};

export default Home;