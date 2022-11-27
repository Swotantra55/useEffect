import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {

  function initialCount(){
    console.log("Ran initial function")
    return 4;
  }

  const [count, setCount] = useState(initialCount());
  
  function decrementCount(){
    setCount(prevCount => prevCount -1)
  }
  function incrementCount(){
    setCount(prevCount => prevCount +1)
    }
  
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;



{/* <div className="App">
      <p>You clicked {count} many times</p>
      <button onClick={()=> setCount(count+1)}>
      Click Me 
      </button>
    </div> */}