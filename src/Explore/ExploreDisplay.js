import React from 'react';
import ExploreCard from './ExploreCard';

class ExploreDisplay extends React.Component {
    filteredPlaces = () => {
        const { filtered, places } = this.props
        if (filtered === 'all') {
            return places
        }
        if (filtered === 'Attraction') {
            return [...places].filter(place => place.category === 'Attraction')
        }
        if (filtered === 'Outdoor') {
            return [...places].filter(place => place.category === 'Outdoor')
        }
        if (filtered === 'Shopping') {
            return [...places].filter(place => place.category === 'Shopping')
        }
        if (filtered === 'Nightlife') {
            return [...places].filter(place => place.category === 'Nightlife')
        }
        if (filtered === 'Dining') {
            return [...places].filter(place => place.category === 'Dining')
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
            return this.filteredPlaces().sort((a,b) => {
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
                {this.sortPlaces().map(place => {
                    return(
                        <ExploreCard key={place.name} place={place} handleClick={this.props.displayPlaceInfo}/>
                    )
                })}
            </div>
        )
    }
};


export default ExploreDisplay;