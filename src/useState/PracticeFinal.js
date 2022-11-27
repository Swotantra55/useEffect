import { useState } from "react";

function App(){
    const [count, setCount] = useState('10')
    const [theme, setTheme] = useState('Blue')

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
        setTheme('Red')
    }
    function decrementCount(){
        setCount(prevCount => prevCount -1)
        setTheme('Yellow')
    }
    return (
        <div>
            <button onClick={incrementCount}>+</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={decrementCount}>-</button>
        </div>
    )

}
export default App