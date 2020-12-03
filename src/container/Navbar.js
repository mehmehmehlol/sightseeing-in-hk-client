import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import './Navbar.css'
import Toggle from '../Theme/Toggle'

const Navbar = ({user, theme, toggleTheme}) => {

    return (
        <div className='navbar'>
            
            <div className="topnav-right">
            
                <a className='navlink' href='/'>Home</a>
                <a className='navlink' href='/explore'>Explore</a>
                
                {
                    user ?
                    <>
                    <a className='navlink' href='/profile'>Hi, {user.first_name}</a>
                    <a className='navlink' href='/favorites'>Favorites</a>
                    <a className="navlink" href='/logout'>Log Out</a> 
                    </>
                    :
                    <>
                        <a className="navlink" href='/login'>Log In</a>
                        <a className="navlink" href='/signup'>Sign Up</a>
                    </>
                }
            </div>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Navbar;

