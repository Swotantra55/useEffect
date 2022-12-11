import { useState, useEffect } from "react";

function App(){
    
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)
    console.log("The value is : ", calculation)

    useEffect(()=>{
        
        //setCalculation(()=> count *2)
        setCalculation((count)=> count *2)
        //here the setCalculation doesn't increase the calculation value when the count is passed
        //because when count is passed as the argument of the arrow function, it takes the value
        //the previous value of the state calculation of the same useState arrow.
        
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
