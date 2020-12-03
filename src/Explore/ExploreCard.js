import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


const ExploreCard = ({place, handleClick, addFavorite, removeFavorite, favorites}) => {
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
            {   
                !favorites.some(favorite => favorite.id === place.id) ?
                <FavoriteBorderIcon onClick={() => {addFavorite(place)}}  />
                :
                <FavoriteIcon onClick={() => {removeFavorite(place)}} />
               
            }
        </div>
    )
};

export default ExploreCard;