import React from 'react'
import bauhinia from '../Images/Golden_Bauhinia_Square.jpg'

const notFound = () => {
    // const style = {
    //     background
    // }
    return (
        <div>
            <h4>Sorry Page Not Found! <br />But Wait!</h4>
            <img src={bauhinia} alt="golden-bauhini-square" />
            <p>Here's a picture of Golden Bauhinia Square. Bauhinia is a type of flower that can be only found in the land of Hong Kong. <br/>The flower has its own symbolic significance in Hong Kong, which you can see in our Hong Kong flag!</p>
        </div>
    )
}

export default notFound;