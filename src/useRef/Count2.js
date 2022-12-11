//the useRef does not rerender the component hence the increase in useRef value is not
// visible until the component is rerendered
import { useRef, useState } from "react";

function App(){
    const [value, setValue] = useState(0)
    const count = useRef(0)

    return (
        <>
        <h1>The count is: {count.current}</h1>
        <button onClick={()=> {count.current = count.current + 1
        console.log(count.current)}}>Increment</button>

        <h1>The value is: {value}</h1>
        <button onClick={()=> {setValue((value)=> value = value + 1)}}>Increment</button>
        </>
    )
}
export default App