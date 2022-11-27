import { useState, useEffect } from "react";

function App() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function handleResize(){
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=> {window.addEventListener("resize", handleResize)}, [])
    // window.addEventListener("resize", handleResize) // this works even in this way, even without the useEffect

    return(
        <>
        <h1>{windowWidth}</h1>
        
        </>
    )
}
export default App