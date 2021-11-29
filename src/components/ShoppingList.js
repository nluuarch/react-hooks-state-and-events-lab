import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All")

  const itemsToDisplay = items.filter((item) =>{
    if (filterBy === "All") {
      return true;
    }

    if (filterBy === "AllExceptProduce"){
      if ("Produce" !== item.category) {
        return true;
      } else {
        return false;
      }
    } 
      
    if (filterBy === item.category) {
      return true;
    } else {
      return false;
    }
  });

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const itemsList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange} >
          <option value="All">Filter by category</option>
          <option value="AllExceptProduce">All Except Produce</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList}
      </ul>
    </div>
  );
}

export default ShoppingList;
