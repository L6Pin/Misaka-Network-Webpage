import React from 'react';
import hero_img from '../img/hero.png'
import cta_arrow from '../img/arrow_down.png'

const Hero = () => (
    <>
<section className="hero">
        <div className="openingFade slideToBottom "></div>
        <div className="nav container_sides">
            <div className="nav__logo">
                <h1>MISAKA NETWORK</h1>
            </div>
            <div className="nav__menu">
                <a href="#overview"><span>Overview</span></a>
                <a href="#download"><span>Download</span></a>
            </div>
        </div>
        <div className="content">
            <div className="content__image fadeIn"><img src={hero_img} alt="MN_Hero" className="fadeIn" /></div>
            <div className="content__text">
                <div>
                    <h1 className="gradientLetters slide-top">MISAKA NETWORK</h1>
                    <p className="slide-top">Digital cryptocurrency powered by</p>
                    <p className="slide-top">Misaka
                        <span className="gradientLetters"> LAST ORDER</span>
                    </p>
                    <a href="#overview"><img src={cta_arrow} alt="CTA Arrow" className="cta" /></a>
                </div>
            </div>

        </div>
    </section>
    </>
)

export default Hero;