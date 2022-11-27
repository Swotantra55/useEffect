import { useState, useEffect } from "react";

function App() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    function handleResize(){
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=> {
        console.log("Checking how many time it runs")
        window.addEventListener("resize", handleResize)
        return (()=>{
            console.log("inside the return/cleanup code")
            window.removeEventListener("resize", "handleResize")
        }
         )
    }, )
    // window.addEventListener("resize", handleResize) // this works even in this way, even without the useEffect

    return(
        <>
        <h1>{windowWidth}</h1>
        
        </>
    )
}
export default App