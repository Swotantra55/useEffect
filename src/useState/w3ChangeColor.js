import { useState } from "react";

function App(){
    const [car, setState] = useState({brand: "Ford", model: 'Mustang', year: "1969", color: 'red'})
    
    function updateColor(){
        setState(prevState =>
            {
                if (car.color==="red"){
                    console.log(car.color)
                    return {...prevState, color: "yellow"}
                }
                else{
                    return {...prevState, color: "red"}
                }
    })}
    return(
        <>
        <h1>The {car.brand}</h1>
        <p>It is {car.color} {car.model} from {car.year}</p>
        <button onClick={updateColor}>Change Color</button>
        </>
    )
}
export default App;