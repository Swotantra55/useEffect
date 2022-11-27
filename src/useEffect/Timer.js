import { useEffect, useState } from "react"


function App(){
    const [count, setCount] = useState(0);

    useEffect(()=> {
        const timer = setTimeout(()=>{
            setCount((count)=> count + 1)
        },3000)
        return ()=> {
            clearTimeout(timer);
        };

    }, [])
    return(
        <>
            <h1>I have counted {count} many times</h1>
        </>
    )
}
export default App

// Here the useEffect is hook is executed only once at the beginning
//  because of [] as depen dency
// The cleanup code removes the timer other wise the timer function will keep on executing
// till the end