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
        <div>
            <img className="explore-image" src={image} 
            alt={name} />
            
                {   
                    !favorites.some(favorite => favorite.id === place.id) ?
                    <FavoriteBorderIcon onClick={() => {addFavorite(place)}} className="heart-icon"/>    
                    :
                    <FavoriteIcon onClick={() => {removeFavorite(place)}} style={{fill: "red"}} className="heart-icon"/>
                }
            {/* <div className="explore-text-over-image">
                {/* <h2 onClick={() => handleClick(place)} style={{cursor: 'pointer'}}>{name}</h2> */}
                {/* <h2>{name}</h2>

            </div> */} 
            <div className="explore-hover-text">
                <h2 onClick={() => handleClick(place)} style={{cursor: 'pointer'}}>{name}</h2>
                <h5>Category: {category}</h5>
            </div>
        </div>

        </div>
   
        
    )
};

export default ExploreCard;