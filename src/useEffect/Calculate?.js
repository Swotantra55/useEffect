import { useState, useEffect } from "react";

function App(){
    
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)
    console.log("The value is : ", calculation)

    useEffect(()=>{
        
        //setCalculation(()=> count *2)
        setCalculation((count)=> count *2)
        
    }, [count])

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=> {setCount((count)=> count + 1 )}} > + </button>
        <h1>Calculation: {calculation}</h1>
        </>
    )
}
export default App
