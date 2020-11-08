import React, {Component} from 'react'
import Menu from '../Menu'
import './style.css'

class Navigation extends Component {
    deviceWidth = document.documentElement.clientWidth
    state = {
        isOpen: true
    }
    
    render() {
        const menu =  this.state.isOpen && <Menu/>
        
        return (
            <nav className='main-navigation'>
                <button className='main-navigation__menu-button' onClick={this.toggleMenu}>Menu</button>
                {menu}
                <p className='main-navigation__see-more'>scroll down to see more</p>
            </nav>
        )
    }


    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Navigation