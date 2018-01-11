import React from 'react';
import './App.css';
import Images from './Images';

/**
 
Exercises:

- Convert all JSX tags in this file into JavaScript code.

 Hint 1: 

  <MyComp prop1={21 * 2}/>

  ==> 

  React.createElement(MyComp, { prop1: 21 * 2 });

*/
const House = (props) => 
  <div>
    <div>{props.roofColor} roof </div>
    The rest of the house
  </div>;

const App = () => <House roofColor="red" />;

export default App;
