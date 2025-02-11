import React from 'react'
import "./Home.css"
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Marquee from './Marquee';
import Shoping from './Shoping';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Marquee />
            <Shoping />


            <Footer />
        </div>



    )
}

export default Home;