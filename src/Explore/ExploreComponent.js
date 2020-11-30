import React from 'react';
import ExploreDisplay from './ExploreDisplay';
import ExploreDetails from './ExploreDetails';
import FilterSort from '../container/FilterSort';

class ExploreComponent extends React.Component {

    state = {
        places: this.props.explore,
        chosenPlace: null,
        filtered: 'all', 
        sorted: 'none'

    }

    // filter
    selectFilter = (filtered) => {
        console.log(filtered)
        this.setState({ filtered })
    }

    // sort
    selectSort = (sorted) => {
        console.log(sorted)
        this.setState({ sorted })
    }

    displayPlaceInfo = (place) => {
        this.setState({chosenPlace: this.state.places.find(p => p === place)})
    }

    backToMain = () => {
        this.setState({chosenPlace: null})
    }

    // Favorites

    render() {
        const { places } = this.state 
        // console.log(places)
        // debugger
        return(
            <div>
                <h1>Places To Explore</h1>
                <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort} />
                {!this.state.chosenPlace ?
                <ExploreDisplay 
                    places={places} 
                    filtered={this.state.filtered} 
                    sorted={this.state.sorted} 
                    displayPlaceInfo={this.displayPlaceInfo} 
                /> 
                :
                <ExploreDetails selected={this.state.chosenPlace} backToMain={this.backToMain} /> 
                }
            </div>
        )
    }
}

export default ExploreComponent;