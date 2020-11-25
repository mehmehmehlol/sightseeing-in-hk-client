import React from 'react'
import ExploreCard from '../Explore/ExploreCard'
import ExploreDetails from '../Explore/ExploreDetails'

class FavoriteComponent extends React.Component {

    state = {
        chosenFavorite: null
    }

    displayFavInfo = (place) => {
        console.log(place)
        this.setState({chosenFavorite: this.props.places.find(p => p === place)})
    }

    closeFav = () => {
        this.setState({chosenFavorite: null})
    }
    render() {
        return(
            <div>
                <h1>Favorites</h1>
                
                {!this.state.chosenFavorite ?
                   this.props.places.map(place => <ExploreCard key={place.name} handleClick={this.displayFavInfo} place={place} />) 
                   :
                   <ExploreDetails selected={this.state.chosenFavorite} backToMain={this.closeFav} />
                }
            </div>
        )
    }
}

export default FavoriteComponent