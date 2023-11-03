// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let obj = {
    name: "titesh",
    age: 22
  }

  let arr = [1, 2, 3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Taiwind Test</h1>
    <Card name= "Raja" btntext = "Click me"/>
    <Card name = "Anthony" myObj = {obj} myArr = {arr} btntext = "Dont even try!"  />
    </>
  )
}

export default App
