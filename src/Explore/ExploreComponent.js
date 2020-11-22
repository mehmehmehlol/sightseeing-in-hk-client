import React from 'react';
import ExploreDisplay from './ExploreDisplay';

class ExploreComponent extends React.Component {

    state = {
        places: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/places')
        .then(res => res.json())
        .then(places => this.setState({places}))
    }

    render() {
        const { places } = this.state 
        return(
            <div>
                <h1>Places To Explore</h1>
                <ExploreDisplay places={places}/>
            </div>
        )
    }
}

export default ExploreComponent;