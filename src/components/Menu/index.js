import React from 'react'
import './style.css'

function Menu() {
    return (
        <ul className='menu__list'>
                <li className='menu__item'>
                    <a className='menu__link' href='#'>
                        Home
                    </a> 
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href='#about'>
                        About me
                    </a> 
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href="#portfolio">
                        Portfolio
                    </a> 
                </li>
                <li className='menu__item'>
                    <a className='menu__link' href="#contact">
                        Contact
                    </a> 
                </li>
            </ul>
    )
}

export default Menu