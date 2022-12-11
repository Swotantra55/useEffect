import { useEffect, useRef, useState } from "react"
import './App.css'

function App(){

    const [name, setName] = useState('')
    const  inputRef = useRef()
    const focusRef = useRef()
    
    useEffect(()=>{
        inputRef.current = name
    })

    function focus(){
        focusRef.current.focus()
    }
    
    return (
        <>
        <input ref={focusRef} value={name} onChange={(e) => setName(e.target.value)}/>
        <h2>My name is : {name}</h2>
        <h2>Previous value: {inputRef.current}</h2>
        <button onClick={focus}>Focus</button>
        </>
    )
}
export default App