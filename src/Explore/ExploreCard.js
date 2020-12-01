import React from 'react';
// import { ExternalLink } from 'react-external-link';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const ExploreCard = ({place, handleClick, addFavorite, removeFavorite, favorites, user}) => {
    const {name, category, image} = place
    // console.log(favorites)
    // console.log(place)
        
    return(
        <div 
            className="ui card" 
            key={place.id} 
            onClick={() => handleClick(place)}
        >
            <h2>{name}</h2>
            <h5>Category: {category}</h5>
            <img src={image} 
            style={{width: 500, height: "auto"}}
            alt={name} />
            <br />
            {   
                !favorites.includes(place) ?
                <button onClick={() => {addFavorite(place)}}>Add to Favorite</button> 
                :
                <button onClick={() => {removeFavorite(place)}}>Remove Favorite</button>
               
            }
        </div>
    )
};

export default ExploreCard;