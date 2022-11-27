import { useState } from "react";

function App(){
    const [customer, setState] = useState({
        name: "Nabin",
        age: "22",
        location: "Pokhara",
    })
    function ChangeLocation(){
        setState(prevState=> {

            if (customer.location === "Pokhara"){
                return{ ...prevState, location: "Kathmandu"}
            }
            else{
                return{ ...prevState, location: "Pokhara"}
            }
        })
    }
    return (
        <>
        <h1>{customer.name}</h1>
        <p>Age: {customer.age}</p>
        <p>Location: {customer.location}</p>
        <button onClick={ChangeLocation}>Change Location</button>
        </>
    )
}
export default App