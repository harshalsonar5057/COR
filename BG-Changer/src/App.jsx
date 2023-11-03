/* eslint-disable no-unused-vars */
import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
   {/* <div className="w-full max-h-screen"></div> */}
   <div className="w-full h-screen duration-100"
    style= {{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button 
            onClick={()=> setColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>
            Red</button>
          <button 
            onClick={()=> setColor("green")}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>
            Green</button>
          <button 
            onClick={()=> setColor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>
            Black</button>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
