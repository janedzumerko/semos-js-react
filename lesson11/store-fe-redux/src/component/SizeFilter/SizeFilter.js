import React from 'react';
import classes from './SizeFilter.module.css';

const filterOptions = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const ifSelected = (currentFilter, allSelected) => {
    if(allSelected.has(currentFilter)) {
        return true;
    }
    return false;
}

function SizeFilter(props) {
    return (
        filterOptions.map((filter, idx) =>
            <span
                style={ifSelected(filter, props.selected) ? { backgroundColor: 'black', color: 'white' } : null}
                className={classes.circle}
                key={idx}
                onClick={() => props.click(filter)}>
                {filter}
            </span>)
    )
}

export default SizeFilter;



