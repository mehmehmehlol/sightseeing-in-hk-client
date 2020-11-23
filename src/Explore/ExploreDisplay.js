import React from 'react';
import ExploreCard from './ExploreCard';

const ExploreDisplay = ({places, handleClick}) => {
    return(
        <div>
            {places.map(place => {
                return(
                    <ExploreCard key={place.id} place={place} handleClick={handleClick}/>
                )
            })}
        </div>
    )
};


export default ExploreDisplay;