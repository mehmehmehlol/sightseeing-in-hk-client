// import { render } from '@testing-library/react';
import { render } from '@testing-library/react';
import React from 'react';
import { ExternalLink } from 'react-external-link';
import MapContainer from '../GoogleApi/MapContainer'

class ExploreDetails extends React.Component {
    // shouldComponentUpdate() {
    //     return true;
    // }
    
    render() {
        const {selected, favorites, addFavorite, removeFavorite, backToMain} = this.props
        const {name, image, description, website, address, phone_number, latitude, longitude} = selected
        console.log(favorites)
        console.log(selected)
        
        return (
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
                    <div>
                        
                    {/* Tags: {selected.tags.map(tag => tag.name + " ")} */}
                    {/* Tags: {selected.tags.map(tag => console.log(tag))} */}
                </div>
                <br />
                {   
                    !favorites.some(favorite => favorite.id === selected.id) ?
                    <button onClick={() => {addFavorite(selected)}}>Add to Favorite</button> 
                    :
                    <button onClick={() => {removeFavorite(selected)}}>Remove Favorite</button>
                
                    }
                    <button 
                    className="detail-btn"
                    onClick={() => {backToMain()}}
                >
                    Back to Previous Page
                </button>

                
                    <MapContainer latitude={latitude} longitude={longitude} name={name}/>
                <br /><br />
                

                </div>
            </div>
        )
    }
};

export default ExploreDetails;