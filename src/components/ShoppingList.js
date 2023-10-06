import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText,setSearchText]= useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems}/>
      <Filter onCategoryChange={handleCategoryChange} searchText={searchText} setSearchText={setSearchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => {
          if (searchText === '') {
            return (
              <Item key={item.id} name={item.name} category={item.category} />
            );
          } else {
            if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
              return (
                <Item key={item.id} name={item.name} category={item.category} />
              );
            }


          }
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
