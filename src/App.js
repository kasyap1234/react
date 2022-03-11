import React from "react"; 
import ReactDOM from "react-dom"; 
import {useState} from "react"; 

import "./style.css"; 
 


function App(){
  const [num,setNum]=useState(0);
  function Increment(){
    setNum(num +1); 

  }
  function Decrement(){
    setNum(num-1); 

  }
  function Reset(){
    setNum(0);

  }
  return (
    
    <div className="parent">
    <div className="title">
    <h1>Counter</h1> 
    
    <h1 > {num}</h1>
    </div>
    <div className="buttons"> 

    <button onClick={Increment}> Increment</button>
    <button onClick={Decrement}> Decrement </button>
    <button onClick={Reset}>RESET</button> 

</div> 
</div> 


  
  )
}
export default App; 
