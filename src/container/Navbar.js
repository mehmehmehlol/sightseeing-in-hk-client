import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../Theme/Toggle'
import logo from '../Images/Mod-5-Project.jpg'

const Navbar = ({user, theme, toggleTheme}) => {
    
    return (
        <div className='navbar'>
            <a className='navlink' href='/' style={{paddingTop: "5px", paddingBottom: "2px"}}>
                    <img src={logo} alt="logo" />
            </a>

            <div className="topnav-right">
                <a className='navlink' href='/about'>About</a>
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
                                <Link className="navlink" to='/logout'>Log Out</Link> 
                            </div>
                        </div>
                    </>
                }
                <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            
        </div>
    )
}

export default Navbar;

