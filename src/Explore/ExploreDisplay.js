import React from 'react';
import ExploreCard from './ExploreCard';

const ExploreDisplay = ({places}) => {
    return(
        <div>
            {places.map(place => {
                return(
                    <ExploreCard key={place.name} place={place} />
                )
            })}
        </div>
    )
};


export default ExploreDisplay;