import React, { useState } from 'react';
import "./Filter.css";

const Filter: React.FC = () => {
    const [filter, setFilter] = useState("");
    const onSubmit = (event: any) => {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input
                className="filterInput"
                type='string'
                value={filter}
                onChange={event => setFilter(event.target.value)}
            ></input>
            <button className="filter">Filter</button>
        </form>
    );
}

export default Filter;
