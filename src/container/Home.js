import React from 'react'
import SlideShow from '../Slide/SlideShow'

const Home = ({user}) => {
    // console.log(user)
    return(
      <div>
        <SlideShow />
        {user ? `Welcome, Traveler ${user.first_name}!` : 'Travler, Whatcha Lookin For!'}
      </div>
    )
}

export default Home