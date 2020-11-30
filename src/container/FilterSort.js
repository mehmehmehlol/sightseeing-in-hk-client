import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

const FilterSort = ({ selectFilter, selectSort }) => {
    // state = {
    //     selectedOption: 'None'
    // }

    // handleFilterChange = (e) => {
    //     this.props.filterBar(e.target.value)
    // }

    // handleSortChange = (e) => {
    //     this.props.sortBar(e.target.value)
    // }

    
        return(
            <div>
                <Filter selectFilter={selectFilter} />
                {/* <label>
                    <strong>Category Filter</strong>
                    <select onChange={this.handleFilterChange}>
                        <option value="All">All</option>
                        <option value="Attraction">Attraction</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Nightlife">Nightlife</option>
                        <option value="Dining">Dining</option>
                    </select>
                </label> */}
                <br />
                <Sort selectSort={selectSort} />
                {/* <strong>Sort By:</strong>
                <label>
                    <input 
                        type="radio"
                        name="None"
                        value="None"
                        checked={this.state.selectedOption === "None"}
                        onChange={this.handleSortChange}
                    />
                    None
                </label>
                <label>
                    <input 
                        type="radio"
                        name="Alphabetically"
                        value="Alphabetically"
                        checked={this.state.selectedOption === "Alphabetically"}
                        onChange={this.handleSortChange}
                    />
                    Alphabetically
                </label> */}
                
                
            </div>
        )
}


export default FilterSort;