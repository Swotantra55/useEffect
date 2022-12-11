
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading';

const Cards = () => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers ] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        // const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        setUsers(await response.json()) ;
        // console.log(data);
        setLoading(false)
    }
    useEffect(()=>{
        getUsers();
    }, []);

    if(loading== true){
        return (
            <Loading/>  
        )
    }
  return (
    <div className="container-fluid mt-5">
        <div className='row text-center'>

            <Card users={users}/>
            

            
        </div>
        
    </div>
  )
}

export default Cards

