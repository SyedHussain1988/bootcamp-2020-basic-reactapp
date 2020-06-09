import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'

function App(props) {
  return <div>Hello from App.js
    <br></br><span>This is Hello from span inside App.js Div from <strong>{props.name}</strong> , Gender <strong>{props.Gender}</strong> having Weight <strong>{props.Weight - 50}</strong></span>
    <br></br>
    <Child actual_weight={props.Weight - 50}></Child>
  </div>
  
}

export default App;
