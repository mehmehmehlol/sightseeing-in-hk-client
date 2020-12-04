import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';


const FavoriteCard = ({place, handleClick, removeFavorite}) => {
    const {name, category, image} = place
    // console.log(favorites)
    // console.log(place)
    // console.log(favorites.some(favorite => favorite.place_id === place.place_id))  
    return(
        <div 
            className="favorite-card" 
            key={place.id} 
        >
            <img src={image} alt={name} />
            <FavoriteIcon onClick={() => {removeFavorite(place)}} style={{fill: "red"}}/>
            <h2 onClick={() => handleClick(place)} style={{cursor: 'pointer'}}>{name}</h2>
            <h5>Category: {category}</h5>

        </div>
    )
};

export default FavoriteCard;