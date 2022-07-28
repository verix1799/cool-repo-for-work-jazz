
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setToDoList] = useState([
    { taskname: "Buy shopping", priority: "low" },
    { taskname: "Clean bathroom", priority: "low" },
    { taskname: "Car's MOT", priority: "high" },
  ]);

  const [priority, setPriority] = useState("");
  const [newListElement, setNewElement] = useState(" ");

  
  const toDoNodes = todos.map((task, index) => {
    return (
      <>
        <li key={index} className={task.priority}>{task.taskname}</li>
      </>
    )
  });


  const handleItemInput = (event) => {
    setNewElement(event.target.value)
  }

  const handleSetPriority = (event) => {
    setPriority(event.target.value)
  }

  const setSaveNewItem = (event) => {
    event.preventDefault();
    const copyList = [...todos]
    copyList.push({ taskname: newListElement, priority: priority})
    setToDoList(copyList)
    setNewElement("")
  }

 

  return (
    <div className="App">

      <h1>To Do List</h1>
      <form onSubmit={setSaveNewItem}>
        <input id='new-item' type="text" value={newListElement} onChange={handleItemInput} />
        <label htmlFor="highPriority">High:</label>
        <input id='highPriority' type="radio" value={priority} onChange={handleSetPriority} />
        <label htmlFor="highPriority">Low:</label>
        <input id='highPriority' type="radio" value={priority} onChange={handleSetPriority} />
        <input type="submit" value="save new item" />
      </form>

      <ul>
        {toDoNodes}
      </ul>

    

    </div>
  );
}

export default App;
