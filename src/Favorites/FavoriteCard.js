import React from 'react';
// import { ExternalLink } from 'react-external-link';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const FavoriteCard = ({place, handleClick, removeFavorite}) => {
    const {name, category, image} = place
    // console.log(favorites)
    // console.log(place)
    // console.log(favorites.some(favorite => favorite.place_id === place.place_id))  
    return(
        <div 
            className="ui card" 
            key={place.id} 
        >
            <h2 onClick={() => handleClick(place)} style={{cursor: 'pointer'}}>{name}</h2>
            <h5>Category: {category}</h5>
            <img src={image} 
            style={{width: 500, height: "auto"}}
            alt={name} />
            <br />
            <button onClick={() => {removeFavorite(place)}}>Remove Favorite</button>
            {/* {   
                !favorites.some(favorite => favorite.id === place.id) ?
                <button onClick={() => {addFavorite(place)}}>Add to Favorite</button> 
                :
                <button onClick={() => {removeFavorite(place)}}>Remove Favorite</button>
               
            } */}
        </div>
    )
};

export default FavoriteCard;