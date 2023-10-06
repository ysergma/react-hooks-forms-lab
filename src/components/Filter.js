import React, { useState } from "react";
import itemData from "../data/items";
import items from "../data/items";


function Filter({ onCategoryChange,setSearchText,searchText }) {
  const[search,setSearch]=useState("")
  const onSearchChange= (e)=>{
   setSearch(e.target.value)
   setSearchText(e.target.value)
   console.log(searchText)

  }
  return (
    <div className="Filter">
      <input  onChange={(e)=>{
        onSearchChange(e.target.value)
      }} value={search} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
