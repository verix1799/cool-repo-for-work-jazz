import './App.css';
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { name: "Milk", isPurchased: false },
    { name: "Cheese", isPurchased: true },
    { name: "Beans", isPurchased: false },
  ]);

  const itemNodes = items.map((item, index) => {
    return (
      <li key={index} className={item.isPurchased ? 'purchased' : 'not-purchased'} >
        <span>{item.name}</span>
        {item.isPurchased ? <span className='purchased'>Purchased</span> : <button onClick={() => purchasedItem(index)}>Purchase</button>}
      </li > //returns array of itemsa
    )
  });

  const [newItem, setNewItem] = useState("");

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }

  const setSaveNewItem = (event) => {
    event.preventDefault();
    const copyItem = [...items]
    copyItem.push({ name: newItem, isPurchased: false })
    setItems(copyItem)
    setNewItem("")
  }

  const purchasedItem = (index) => {
    const copyItems = [...items]
    copyItems[index].isPurchased = true;
    setItems(copyItems)
  }
  // const addNewItem = (items) => {

  // }
  return (
    <div className="App">

      <h1>Shopping List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={setSaveNewItem}>
        <label htmlFor="new-item">Add a new item:</label>
        <input id='new-item' type="text" value={newItem} onChange={handleItemInput} />
        <input type="submit" value="save new item" />
      </form>

    </div>
  );
}

export default App;
