import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState("8");
  const[number, setNumber] = useState(false)

  const[charecter, setCharector] = useState(false)
  const[password, setPassword] = useState("")
  const passref = useRef(null)


  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+="0123456789";
     
    if(charecter) str+="2#!$%^&*+";

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
       pass+=str.charAt(char)
    }

     setPassword(pass)
  }, [length, number, charecter, setPassword])

  const copypassword = useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>
  {passwordgenerator()}, [length,number, charecter, passwordgenerator])

  return (
    <>
    <div className=' w-full max-w-md mx-auto shadow-md 
     rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 py-5'>
        <input type="text"
        value={password} 
        className=' outline-none w-full py-1 px-3 rounded-lg'
        placeholder='password'
        readOnly
        ref={passref}
        />
        <button 
        onClick={copypassword}
        className='online-none bg-blue-700
         text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={80}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={number}
            id="numberInput" 
            onChange={()=>{
              setNumber((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={charecter}
            id="numberChar" 
            onChange={()=>{
              setCharector((prev)=>!prev)
            }}
            />
            <label htmlFor="numberChar">special</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
