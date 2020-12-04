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
            className="explore-card" 
            key={place.id} 
        >
            <img className="explore-image" src={image} 
            alt={name} />
            {   
                !favorites.some(favorite => favorite.id === place.id) ?
                <FavoriteBorderIcon onClick={() => {addFavorite(place)}} />    
                :
                <FavoriteIcon onClick={() => {removeFavorite(place)}} style={{fill: "red"}} />
            }
            <h2 onClick={() => handleClick(place)} style={{cursor: 'pointer'}}>{name}</h2>
            <h5>Category: {category}</h5>
            <br />
            
        </div>
   
        
    )
};

export default ExploreCard;