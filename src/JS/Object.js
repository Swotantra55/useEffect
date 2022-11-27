import { useState, useEffect } from "react";

function App(){
    
    let input = "phone";    
    let org ={
        name: "RKD",
        location: "Pokhara",
        phone: '541440',
        emp : {
            id: 10,
            position: 'manager'
        }
    }
    delete org.location
    // console.log(org)

    for(let key in org){
        console.log(org[key])
    }
    for (let key in org.emp){
        console.log(org.emp[key])
    }

    // console.log(org.name)
    // console.log(org.emp)
    // console.log(org.emp.position)

    return (
        <>
        <h1>{org["name"]}</h1>
        <h1>{org.location}</h1>
        <h1>{org[input]}</h1>
        </>
    )
}
export default App
