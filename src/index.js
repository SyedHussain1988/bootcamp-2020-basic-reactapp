import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   //<div>This is Testing with Hello world 123</div>,
//   //React.createElement('App',null,"This is Testing with Hello world 123 using React Create Element"),
//   React.createElement('App',null,React.createElement('span',null,"This is Hello from React Create Element span")),
//   document.getElementById('root')
// );

ReactDOM.render(
  //Below is JSX syntax
  <div><App name="Syed Hussain Ahmed" Gender="Male" Weight={100}></App></div>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
