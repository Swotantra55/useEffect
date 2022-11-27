import {useState} from 'react';
//object destructuring; hence the curly braces is used

function incrementCount(){
    setState(prevState => {return {
        ...prevState, count: prevState +1
    }})
}

function decrementCount(){
    setState(prevState=> {return {...prevState, prevState-1}})
    
}


const [state, setState] = useState({count:10, theme: 'blue'})
const count= state.count;
const theme= state.theme;


