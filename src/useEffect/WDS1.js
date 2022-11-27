import {useEffect, useState} from 'react';

function App(){

    const [resourceType, setResourceType] = useState("posts")
    const [items, setItem] = useState([])


    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItem(json))
    }, [resourceType]
    )

    return (
        <>
        <button onClick={()=> setResourceType("users")}>Users</button>
        <button onClick={()=> setResourceType("posts")}>Posts</button>
        <button onClick={()=> setResourceType("comments")}>Comments</button>

        <p>{resourceType}</p>
        {items.map(item=>
            {
            return <pre>{JSON.stringify(item)}</pre>
            }
        )}
        </>
    )
}
export default App