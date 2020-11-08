import React from 'react'
import Menu from '../Menu'
import './style.css'
import photo_s from './img/Jason_Wood_s.jpg'
import photo_m from './img/Jason_Wood_m.jpg'
import photo_l from './img/Jason_Wood_l.jpg'

function About() {
    return (
        <section className='about' id="about">
            <div className='container'>
                <Menu/>
                <div className='about__wrapper'>
                    <picture className='about__photo'>
                        <source srcset={photo_m} media="(min-width: 768px)"></source>
                        <source srcset={photo_l} media="(min-width: 1024px)"></source>
                        <img  src={photo_s} alt="my pfoto"></img>
                    </picture>
                    <div className='about__text-wrapper'>
                        <h2 className='about__header'>About me</h2>
                        <article className='about__description'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </article>
                        <cite className='about__me'>
                            Jason Wood
                        </cite>
                    </div>
                    
                </div>
                <p className='about__see-more'>keep scrolling, there is still more to come.</p>
            </div>
            
        </section>
    )
}
export default About