import React from 'react';
import ExploreDisplay from './ExploreDisplay';
import ExploreDetails from './ExploreDetails';

class ExploreComponent extends React.Component {

    state = {
        places: this.props.explore,
        chosenPlace: null

    }

    componentDidMount() {
        fetch('http://localhost:3001/places')
        .then(res => res.json())
        // debugger
        .then(data => { this.setState({
            places: data.data.map(place => place.attributes)})}
        )
    }


    // selectPlace = id => {
    //     this.setState({
    //         chosenPlace: this.state.places.find(place => place.id === id)
    //     })
    // }

    displayPlaceInfo = (place) => {
        this.setState({chosenPlace: this.state.places.find(p => p === place)})
    }

    backToMain = () => {
        this.setState({chosenPlace: null})
    }

    // Favorites

    render() {
        const { places } = this.state 
        console.log(places)
        // debugger
        return(
            <div>
                <h1>Places To Explore</h1>
                {!this.state.chosenPlace ?
                <ExploreDisplay places={places} handleClick={this.displayPlaceInfo} /> :
                <ExploreDetails selected={this.state.chosenPlace} backToMain={this.backToMain} /> 
                }
            </div>
        )
    }
}

export default ExploreComponent;