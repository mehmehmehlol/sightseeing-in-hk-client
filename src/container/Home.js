import React from 'react'
import { Link } from 'react-router-dom'
import SlideShow from '../Slide/SlideShow'
import hk1 from '../Images/hong-kong-1.jpg'
import hk2 from '../Images/hong-kong-3.jpg'
import hk3 from '../Images/hong-kong-4.jpg'
import hk4 from '../Images/hong-kong-8.jpg'
import hk5 from '../Images/hong-kong-5.jpg'
import hk6 from '../Images/hong-kong-7.jpg'

const Home = ({user}) => {

    return(
      <div>
        <SlideShow />
        {user 
        ? 
        <div>

          <h2 className="greeting">Welcome, Traveler {user.first_name}!</h2>

          <div className="home-wrapper">
            <div className="home-grid">
              <a className='navlink' href='/about'>
                <img src={hk1} alt="about" />
                <div className="text-over-image">About</div>
                <div className="hover-text">
                  <p>Want to learn more about Hong Kong before moving on?</p>
                </div>
              </a>
            </div>

            <div className="home-grid">
              <a className='navlink' href='/explore'>
                <img src={hk4} alt="explore" />
                <div className="text-over-image">Explore</div>
                <div className="hover-text">
                  <p>Let's explore Hong Kong!</p>
                </div>
              </a>
            </div>

            <div className="home-grid">
              <a className='navlink' href='/favorites'>
                <img src={hk3} alt="favorites" />
                <div className="text-over-image">Favorites</div>
                <div className="hover-text">
                  <p>Do you have some Favorites? Come peek!</p>
                </div>

              </a>
            </div>

            <div className="home-grid">       
              <Link className='navlink' to='/profile'>
                <img src={hk2} alt="profile" />
                <div className="text-over-image">Profile</div>
                <div className="hover-text">
                  <p>Are you sure this is you? Just kidding! Make sure the info's correct!</p>
                </div>

              </Link>
            </div>

            </div> 
          </div>
        : 
        <div>
          <h2 className="greeting">Hey Traveler, Whatcha Lookin For!</h2>
          <div className="home-wrapper">
            <div className="home-grid">
              <a className='navlink' href='/about'>
                <img src={hk1} alt="about" />
                <div className="text-over-image">About</div>
                <div className="hover-text">
                  <p>Want to learn more about Hong Kong before moving on? Here's your chance!</p>
                </div>
              </a>
            </div>

            <div className="home-grid">
              <a className='navlink' href='/explore'>
                <img src={hk4} alt="explore" />
                <div className="text-over-image">Explore</div>
                <div className="hover-text">
                  <p>Let's explore Hong Kong!</p>
                </div>
              </a>
            </div>

            <div className="home-grid">
              <a className='navlink' href='/login'>
                <img src={hk6} alt="login" />
                <div className="text-over-image">Login</div>
                <div className="hover-text">
                  <p>Log in? Welcome back!</p>
                </div>
              </a>
            </div>

            <div className="home-grid">       
              <a className='navlink' href='/signup'>
                <img src={hk5} alt="signup" />
                <div className="text-over-image">Sign Up</div>
                <div className="hover-text">
                  <p>New here? Create an account and customize your experience here!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        }
        </div>
    )
}

export default Home