import {  useContext } from 'react'
import { UserContext } from '../../App';

function Component2(){
    const user = useContext(UserContext);

    return (
        <>
            <h1>Inside Second Component</h1>
            <h2>{`Hello! ${user}`}</h2>
        </>
    )
}
export default Component2