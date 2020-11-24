import React from 'react'
import ExploreCard from '../Explore/ExploreCard'

class FavoriteComponent extends React.Component {
    render() {
        return(
            <div>
                {/* {this.props.favorites.map(place => <ExploreCard place={place} removeFavorite={this.props.removeFavorite} />)} */}
                {this.props.favorites.map(place => <ExploreCard place={place}/>)}
            </div>
        )
    }

}

export default FavoriteComponent