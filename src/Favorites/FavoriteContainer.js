import React from 'react'
import ExploreDetails from '../Explore/ExploreDetails'
import FilterSort from '../FilterSort/FilterSort';
import FavoriteDisplay from './FavoriteDisplay';

class FavoriteContainer extends React.Component {

    state = {
        chosenFavorite: null,
        filtered: 'all', 
        sorted: 'none'
    }

    displayFavInfo = (place) => {
        // console.log(place)
        this.setState({chosenFavorite: this.props.favorites.find(p => p === place)})
    }

    // filter
    selectFilter = (filtered) => {
        // console.log(filtered)
        this.setState({ filtered })
    }

    // sort
    selectSort = (sorted) => {
        // console.log(sorted)
        this.setState({ sorted })
    }

    closeFav = () => {
        this.setState({chosenFavorite: null})
    }

    render() {
        return(
            <div>
                
                {!this.state.chosenFavorite ?
                    <FavoriteDisplay
                    favorites={this.props.favorites} 
                    filtered={this.state.filtered} 
                    sorted={this.state.sorted} 
                    displayFavInfo={this.displayFavInfo} 
                    removeFavorite={this.props.removeFavorite}
                    selectFilter={this.selectFilter}
                    selectSort={this.selectSort}
                    /> 
                   :
                   <ExploreDetails selected={this.state.chosenFavorite} backToMain={this.closeFav} />
                }
            </div>
        )
    }
}

export default FavoriteContainer;