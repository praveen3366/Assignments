import React from 'react';

const Filter = ({ selectPriority }) => {
    const updatePriority = (event) => {
        selectPriority(event.target.value);
    }
    return (
        <select onChange={updatePriority} style={{ display: 'block', margin: 25, padding: 5 }}>
            <option value="All">All</option>
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
        </select>
    )
}

export default Filter;