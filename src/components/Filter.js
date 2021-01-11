import React from 'react'

const Filter = (props) => {
    console.log(props)
    return (
        <select name="filter" onChange={props.onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    )
}

export default Filter