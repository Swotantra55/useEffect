import { createContext, useState } from "react"
import Component1 from "./UseContext.js/W3/Component1";

export const UserContext = createContext();

function App(){
    const [user, setUser] = useState("Pokhara");
    
    return (
        <>
            <UserContext.Provider value={user}>
            <h1>Inside Parent Component</h1>
            <Component1/>
            
            </UserContext.Provider>
            
        </>
    )
}
export default App