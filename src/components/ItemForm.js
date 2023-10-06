import React,{useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({items,setItems}) {

  const[array,setArray]=useState(items)
  const [itemName,setItemName]=useState("")
  const [itemCategory,setItemCategory]=useState('Produce')
  const handleSubmit = (e)=>{
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    addElement(newItem)
  }
  function addElement(element) {
    setArray([...array, element]);
    setItems(array)
    }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={itemName} onChange={(e)=>{setItemName(e.target.value)}} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=>{setItemCategory(e.target.value)}}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
