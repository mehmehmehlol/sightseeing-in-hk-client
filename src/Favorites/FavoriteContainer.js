import React from 'react'
// import ExploreCard from '../Explore/ExploreCard'
// import ExploreDisplay from '../Explore/ExploreDisplay'
import ExploreDetails from '../Explore/ExploreDetails'
import FilterSort from '../container/FilterSort';
import FavoriteDisplay from './FavoriteDisplay';

class FavoriteContainer extends React.Component {

    state = {
        chosenFavorite: null,
        filtered: 'all', 
        sorted: 'none',
        newFav: []
    }

    displayFavInfo = (place) => {
        // console.log(place)
        this.setState({chosenFavorite: this.props.favorites.find(p => p === place)})
    }

    // removeFav = (favorite) => {
    //     let newFavorite = this.state.newFav.filter(f => f !== favorite)
    //     this.setState({ newFav: newFavorite })
    //     fetch(`http://localhost:3001/favorites/${favorite.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(favorite)
    //     })
    // }

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
                <h1>Favorites</h1>
                <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort} />
                {!this.state.chosenFavorite ?
                    <FavoriteDisplay
                    favorites={this.props.favorites} 
                    filtered={this.state.filtered} 
                    sorted={this.state.sorted} 
                    displayFavInfo={this.displayFavInfo} 
                    removeFavorite={this.props.removeFavorite}
                    // newFav={this.newFav}
                    /> 
                   :
                   <ExploreDetails selected={this.state.chosenFavorite} backToMain={this.closeFav} />
                }
            </div>
        )
    }
}

export default FavoriteContainer;