import { useEffect, useRef, useState } from "react"
import './App.css'

function App(){

    const [name, setName] = useState('')
    const  inputRef = useRef()
    
   

    function focus(){
        inputRef.current.focus()
    }
    
    return (
        <>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
        <h2>My name is : {name}</h2>
        <button onClick={focus}>Focus</button>
        </>
    )
}
export default App