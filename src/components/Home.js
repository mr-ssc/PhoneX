import React from 'react'
import "./Home.css"
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Marquee from './Marquee';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Marquee />


            <Footer />
        </div>



    )
}

export default Home;