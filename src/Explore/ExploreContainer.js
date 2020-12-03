import React from 'react';
import ExploreDisplay from './ExploreDisplay';
import ExploreDetails from './ExploreDetails';
import FilterSort from '../FilterSort/FilterSort';

class ExploreContainer extends React.Component {
    state = {
        places: [],
        chosenPlace: null,
        filtered: 'all', 
        sorted: 'none',
        // favorites: this.props.favorites
    }

    // fetch places
    componentDidMount() {
        
        fetch('http://localhost:3001/places')
            .then(res => res.json())
            .then(places => { 
                this.setState({places})
            })
    }


    // filter
    selectFilter = (filtered) => {
        console.log(filtered)
        this.setState({ filtered })
    }

    // sort
    selectSort = (sorted) => {
        // console.log(sorted)
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
                    addFavorite={this.props.addFavorite}
                    removeFavorite={this.props.removeFavorite} 
                    favorites={this.props.favorites}
                    user={this.props.user}
                /> 
                :
                <ExploreDetails 
                    selected={this.state.chosenPlace} 
                    favorites={this.props.favorites} 
                    backToMain={this.backToMain} 
                /> 
                }
            </div>
        )
    }
}

export default ExploreContainer;