import React from 'react'

const Home = ({user}) => {
    // console.log(user)
    return(
      <div>
        {user ? `Welcome, Traveler ${user.first_name}!` : 'Travler, Whatcha Lookin For!'}
      </div>
    )
}

export default Home