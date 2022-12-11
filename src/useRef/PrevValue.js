import { useEffect, useRef, useState } from "react"
import './App.css'

function App(){

    const [name, setName] = useState('')
    const renderCount = useRef('')

    useEffect(()=>{
        renderCount.current = name
    }, [name])
    
    return (
        <>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <h2>My name is : {name}</h2>
        <h2>Previous value: {renderCount.current}</h2>
        </>
    )
}
export default App