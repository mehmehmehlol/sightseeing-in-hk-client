import React from 'react';
import { ExternalLink } from 'react-external-link';
import MapContainer from '../GoogleApi/MapContainer'

class ExploreDetails extends React.Component {
    // shouldComponentUpdate() {
    //     return true;
    // }
    
    render() {
        const {selected, backToMain} = this.props
        const {name, image, description, website, address, phone_number, latitude, longitude} = selected
        // console.log(favorites)
        // console.log(selected)
        
        return (
            <div className="explore-detail-container">

                <div className="explore-detail">
                    <h1 className="explore-detail-title">{name}</h1>
                    <img src={image} 
                    style={{width: 500, height: "auto"}}
                    alt={name} />
                    <div className="explore-detail-text">
                        <h3>What's so exiting about this place!</h3> <br/>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="explore-detail-information">
                    <h3>More Information:</h3>
                   Website: 
                    <ExternalLink href={website} target="_blank" rel="noopener noreferrer"> 
                        <span style={{fontWeight: "300"}}>{name}</span>
                    </ExternalLink>
                    <br />
                    Address: {address}<br/>
                    Phone Number: <a href="tel:{phone_number}" style={{fontWeight: "300"}}>{phone_number}</a>
                    <div>
                        
                    {/* Tags: {selected.tags.map(tag => tag.name + " ")} */}
                    {/* Tags: {selected.tags.map(tag => console.log(tag))} */}
                </div>
                <br />
                <button 
                    className="detail-btn"
                    onClick={() => {backToMain()}}
                >
                    Back to Previous Page
                </button>
                <br />
                <br />
                
                <MapContainer latitude={latitude} longitude={longitude} name={name}/>
               
                <br /><br />
                
                </div>
            </div>
        )
    }
};

export default ExploreDetails;