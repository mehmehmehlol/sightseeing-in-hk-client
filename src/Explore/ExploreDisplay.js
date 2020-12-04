import React from 'react';
import ExploreCard from './ExploreCard';
import FilterSort from '../FilterSort/FilterSort';
// import { GridList } from 'material-ui';

class ExploreDisplay extends React.Component {

    state = {
        listView: true,
        gridView: false
    }

    // listView
    handleList = () => {
        this.setState({
            listview: true,
            gridView: false
        })
    }

    handleList = () => {
        this.setState({
            listview: false,
            gridView: true
        })
    }
    
    // filter 
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
        if (sorted === 'alphabetically') {
            return [...this.filteredPlaces()].sort((a,b) => {
                if (a.name < b.name) {
                    return -1
                }
                return 1
            })
        } else {
            return this.filteredPlaces();
        }
    }
    
    render() {
        // let btnClass = classNames('item', {
        //     'list-group-item': this.state.listView,
        //     'grid-group-item': this.state.gridView
        // })

        return(
            <div>
                <h1>Places To Explore</h1>
                <FilterSort className="filter-sort" selectFilter={this.props.selectFilter} selectSort={this.props.selectSort} />
                {/* <GridList 
                    handleList={this.handleList}
                    handleGrid={this.handleGrid}
                /> */}
                <br />
                <div className="explore-container">
                    {this.sortPlaces().map(place => {
                        return(
                            <ExploreCard 
                                key={place.name} 
                                place={place} 
                                handleClick={this.props.displayPlaceInfo} 
                                addFavorite={this.props.addFavorite}
                                removeFavorite={this.props.removeFavorite}
                                favorites={this.props.favorites}
                                user={this.props.user}
                                gridView={this.state.gridView}
                                listView={this.state.listView}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
};


export default ExploreDisplay;