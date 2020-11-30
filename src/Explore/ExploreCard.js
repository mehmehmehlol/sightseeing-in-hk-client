import React from 'react';
// import { ExternalLink } from 'react-external-link';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


const ExploreCard = ({place, handleClick}) => {
    const {name, category, image} = place
    
        
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
            
        </div>
    )
};

export default ExploreCard;