import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';



const mapStyles = {
    width: '50%',
    height: '50%'
}

class MapContainer extends React.Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onClose = props => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        const {latitude, longitude, name } = this.props
        return (
            <Map 
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: latitude,
                        lng: longitude
                    }
                }
            >
                <Marker 
                    onClick={this.onMarkerClick}
                    name={name}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>

                    </div>
                </InfoWindow>
            </Map>
        )
    }

}
export default GoogleApiWrapper({
//    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
   
})(MapContainer)