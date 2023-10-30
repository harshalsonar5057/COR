/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() { 

let [counter, setCounter]= useState(15)
let [lastAction, setLastAction] = useState(null);

const addValue = ()=>{
  if (counter < 20) {
    setCounter(counter + 1);
    setLastAction("add");
  }
}

const removeValue = ()=>{
  if (counter > 0) {   
    setCounter(counter - 1);
    setLastAction("remove");
  }
}

  return (
    <>
        <h1>Chai Or React</h1>
        <h2>Counter value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <br />
        <button onClick={removeValue}>Remove Value</button>
        {/* <p>Your New Value After Adding Is: {counter} </p> */}
        <p>
        {lastAction === "add"
          ? `You're adding values! Your new value is: `
          : lastAction === "remove"
          ? `Oh, removing values, huh? Your new value is: `
          : "Make a move to see the message"}
        {counter}
      </p>
    </>
  )
}

export default App
