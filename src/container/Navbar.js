import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css'

const Navbar = ({user}) => {

    // const handleClick = () => {
    //     axios.delete('http://localhost:3001/logout', {withCredentials: true})
    //     .then(res => {
    //         props.handleLogout()
    //         props.history.push('/')
    //     })
    //     .catch(error => console.log(error))
    // }

    return (
        <Menu>
            <Link className='menu-item' to='/home'>Home</Link><br />
            <Link className='menu-item' to='/explore'>Explore</Link><br /> 
            
             {
                 user ?
                 <>
                 <Link className='menu-item' to='/favorites'>Favorites</Link><br/>
                 <Link className="menu-item" to='/logout'>Log Out</Link> 
                 </>
                 :
                 <>
                     <Link className="menu-item" to='/login'>Log In</Link>
                     <br />
                     <Link className="menu-item" to='/signup'>Sign Up</Link>
                     <br />
                 </>
             }
    
        </Menu>
    )
}

export default Navbar;

