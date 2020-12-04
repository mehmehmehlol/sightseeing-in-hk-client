import React from 'react'

const GridList = ({handleList, handleGrid}) => {
    return (
        <div className="btn-group">
            <span onClick={handleList} id="list">
                <i className="glyphicon glyphicon-th-list"/>List
            </span>
        
            <span onClick={handleGrid} id="grid" className="btn btn-default btn-xs">
                <i className="glyphicon glyphicon-th"/> Grid
            </span>
    </div>
    )
}