import React from 'react';
import './Child.css'

function Child(props) {
  return <div>Hello from Child.js
    <br></br><span>This is Hello from span inside Child.js Div with Actual Weight <strong> {props.actual_weight}</strong></span>
  </div>
}

export default Child;
