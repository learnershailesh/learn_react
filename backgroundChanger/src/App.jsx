import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("grey")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={()=>setColor("pink")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"pink"}}>pink</button>
          <button 
          onClick={()=>setColor("olive")}
           className='outline-none px-4 py-1 rounded-full text-black shadow-xl'
          style={{backgroundColor:"olive"}}>olive</button>
          <button
           onClick={()=>setColor("#d9f99d")}
           className='outline-none px-4 py-1 rounded-full text-black shadow-xl'
          style={{backgroundColor:"#d9f99d"}}>lime</button>
          <button
           onClick={()=>setColor("#38bdf8")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"#38bdf8"}}>sky</button>
          <button 
          onClick={()=>setColor("orange")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl'
          style={{backgroundColor:"black"}}>black</button>
        </div>
      </div>

    </div>
  )
}

export default App
