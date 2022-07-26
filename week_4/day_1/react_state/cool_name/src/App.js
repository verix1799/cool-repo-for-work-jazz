import React, { useState } from 'react';
import './App.css';

function App() {

  const [greeting, setGreeting] = useState("Hello CCYA");
  // const [variableName, setVariable] = useState("Default Value for the variable");

  let [total, setTotal] = useState(0);
  

  // const greeting = "Hello CCYA";
  const handleClick = () => {
    setGreeting("Hello John");

    // const heading = document.querySelector('h1');
    // heading.textContent = "Hello My Friend";
  }

  const handleDeposit = () => {
    setTotal(total + 10);
  }
  const handleWithdraw = () => {
    if (total > 0) {
      setTotal(total - 10);
    } else {
      setTotal(total = 0);
    }

  }

  return (

    <>
      <h1>{greeting}</h1>

      <button onClick={handleClick}>Change Greeting</button>
      <p>Total: £{total}</p>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </>
  );
}

export default App;
