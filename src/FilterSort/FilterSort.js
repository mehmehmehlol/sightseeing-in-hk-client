import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

const FilterSort = ({ selectFilter, selectSort }) => {
        return(
            <div>
                <Filter selectFilter={selectFilter} />
                <br />
                <Sort selectSort={selectSort} />
            </div>
        )
}


export default FilterSort;