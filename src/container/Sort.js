import React from 'react'

const Sort = ({ selectSort }) => {
    const handleSortChange = (e) => {
        selectSort(e.target.value)
    }

    return (
        <div>
            <strong>Sort By:</strong>
               
                <input 
                    type="radio"
                    name="radio-btn"
                    value="none"
                    id="none"
                    onChange={handleSortChange}
                />
                <label htmlFor="none">None</label>  
                
      
                <input 
                    type="radio"
                    name="radio-btn"
                    value="alphabetically"
                    id="alphabetically"
                    onChange={handleSortChange}
                />
                <label htmlFor="alphabetically">Alphabetically</label>  
          
        </div>
    )
}

export default Sort