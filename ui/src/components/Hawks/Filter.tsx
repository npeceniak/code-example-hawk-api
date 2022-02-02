import React, { useState } from 'react';

const Filter: React.FC = (props) => {
    const [filter, setFilter] = useState("");
    const onSubmit = (event: any) => {
        event.preventDefault();
        console.log(event);
    }
    
    return (
        <form className="filter" onSubmit={onSubmit}>
        <input
            type='string'
            value={filter}
            onChange={event => setFilter(event.target.value)}
        ></input>
        <button>Filter</button>
    </form>
    );
}

export default Filter;
