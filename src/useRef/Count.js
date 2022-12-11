import { useEffect, useRef, useState } from "react"
import './App.css'

function App(){

    const [name, setName] = useState("")
    const renderCount = useRef(0)
    
    useEffect(()=> {
        renderCount.current = renderCount.current + 1;
    })
    //the value is display though the useRef cannot rerender because the update of dom and
    //value is done while the state of the name changes
    return (
        <>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <h2>Being typed: {name}</h2>
        <h2>I have been rendered {renderCount.current} many times</h2>
        </>
    )
}
export default App 