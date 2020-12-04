import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import './Navbar.css'
import Toggle from '../Theme/Toggle'
import logo from '../Images/Mod-5-Project.jpg'

const Navbar = ({user, theme, toggleTheme}) => {
    
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            <div className="topnav-right">
            
                <a className='navlink' href='/'>Home</a>
                <a className='navlink' href='/explore'>Explore</a>
                
                {
                    !user ?
                    <>
                    <div className="dropdown">
                        <button className="dropbtn">Account</button>
                        <div className="dropdown-content">
                            <a className='navlink' href='/login'>Log In</a>
                            <a className="navlink" href='/signup'>Sign Up</a> 
                        </div>
                    </div>
                    </>
                    :
                    <>
                        <a className='navlink' href='/favorites'>Favorites</a>
                        <div className="dropdown">
                            <button className="dropbtn">Hi, {user.first_name}</button>
                            <div className="dropdown-content">
                                <a className='navlink' href='/profile'>Profile</a>
                                <a className="navlink" href='/logout'>Log Out</a> 
                            </div>
                        </div>
                    </>
                }
            </div>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
    )
}

export default Navbar;

