import React from 'react';
import { ExternalLink } from 'react-external-link';
import MapContainer from '../GoogleApi/MapContainer'

const ExploreDetails = ({chosenPlace, backToMain}) => {
    const {name, image, description, website, address, phone_number, latitude, longitude} = chosenPlace
        
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} 
            style={{width: 500, height: "auto"}}
            alt={name} />
            <h3>What's so exiting about this place!</h3> <br/>
                <p>{description}</p>

            <div>
                <h3>More Information:</h3> <br/>
                Website: 
                <ExternalLink href={website} target="_blank" rel="noopener noreferrer"> 
                    <span>{name}</span>
                </ExternalLink>
                <br />
                Address: {address}<br/>
                Phone Number: <a href="tel:{phone_number}">{phone_number}</a>
                <button 
                className="detail-btn"
                onClick={() => {backToMain()}}
               >
                   Back to Explore Page
               </button>

               <div>
                   {chosenPlace.place_tags.map(tag => console.log(tag))}
               </div>
                <MapContainer latitude={latitude} longitude={longitude} name={name}/>
               <br /><br />
               

            </div>
        </div>
    )
};

export default ExploreDetails;