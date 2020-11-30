import React from 'react';
import ExploreCard from './ExploreCard';

class ExploreDisplay extends React.Component {
    // {places, filtered, sorted, displayPlaceInfo}
    // filter
    // const categoryState = filtered === 'Attraction';

    // const filteredPlaces = filtered === 'All' ? places : places.filter(place => place.category === categoryState)

    
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
        
    //     console.log(places)
    //     if (filtered) {
    //         return places.filter(p => (
    //             // console.log(p.category)
    //             p.category === filtered
    //             ))
    //     } else{
    //         return places;
    //     }
    // }

    // sort
    sortPlaces = () => {
        const { sorted } = this.props
        console.log(this.filteredPlaces())
        if (sorted === 'none') {
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