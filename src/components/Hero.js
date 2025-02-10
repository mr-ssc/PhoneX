import React from 'react'
import "./Hero.css"
import buds from "../components/Img/Hero-buds.png"

const Hero = () => {
    return (
        <div>

            <section class="hero">
                <div class="hero-content">
                    <h1>Phonex</h1>
                    <p>Convallis interdum purus adipiscing dis parturient posuere ac a quam a eleifend montes parturient posuere curae tempor.</p>
                    <div class="buttons">
                        <a href="#" class="btn">Read Now</a>
                        <a href="#" class="btn">Shop Now</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src={buds} alt="Buds Vector"/>
                </div>
            </section>

        </div>
    )
}

export default Hero
