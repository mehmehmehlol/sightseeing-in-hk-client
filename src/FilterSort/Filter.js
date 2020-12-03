import React from 'react'

const Filter = ({ selectFilter }) => {

    return(
        <div>
            <strong>Category Filter</strong>
            <select onChange={e => selectFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Attraction">Attraction</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Shopping">Shopping</option>
                <option value="Nightlife">Nightlife</option>
                <option value="Dining">Dining</option>
            </select>
        </div>
    )
}

export default Filter;