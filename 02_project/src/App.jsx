import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)
   const value = ()=>{
     counter=counter+1;
     if(counter>19) counter = 19;
     setCount(counter)
   }

   const remove_val = ()=>{
    counter=counter-1;
    if(counter<0) counter =0;
    setCount(counter)
   }
  return (
    <>
      <h1>chai+react code</h1>
      <h2>counter = {counter}</h2>
      <button onClick={value}>add</button>
      <br/>
      <br/>
      <button onClick={remove_val}>remove</button>
    </>
  )
}

export default App
