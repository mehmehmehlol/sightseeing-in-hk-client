import React from 'react'
import FavoriteCard from './FavoriteCard'
import FilterSort from '../FilterSort/FilterSort';

class FavoriteDisplay extends React.Component {
    filteredPlaces = () => {
        const { filtered, favorites } = this.props
        if (filtered === 'all') {
            return favorites
        }
        if (filtered === 'Attraction') {
            return [...favorites].filter(place => place.category === 'Attraction')
        }
        if (filtered === 'Outdoor') {
            return [...favorites].filter(place => place.category === 'Outdoor')
        }
        if (filtered === 'Shopping') {
            return [...favorites].filter(place => place.category === 'Shopping')
        }
        if (filtered === 'Nightlife') {
            return [...favorites].filter(place => place.category === 'Nightlife')
        }
        if (filtered === 'Dining') {
            return [...favorites].filter(place => place.category === 'Dining')
        }
    }
        
    // sort
    sortPlaces = () => {
        const { sorted } = this.props
        // console.log(this.filteredPlaces())
        if (sorted === 'none') {
            // console.log(this.filteredPlaces())
            return this.filteredPlaces();
        }
        if (sorted === 'alphabetically') {
            return [...this.filteredPlaces()].sort((a,b) => {
                if (a.name < b.name) {
                    return -1
                }
                return 1
            })
        }
    }
    
    render() {
        return(
            <div>
                <h1>Favorites</h1>
                <FilterSort  selectFilter={this.props.selectFilter} selectSort={this.props.selectSort} />
                <br />
                <div className="favorite-container">
                    {this.sortPlaces().map(place => {
                        return(
                            <FavoriteCard 
                                key={place.name} 
                                place={place} 
                                handleClick={this.props.displayFavInfo} 
                                removeFavorite={this.props.removeFavorite}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FavoriteDisplay;