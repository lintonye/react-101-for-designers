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
  React.createElement(
    'div',
    {},
    React.createElement('div', {}, props.roofColor + ' roof'),
    'The reset of the house'
  );

const App = () => React.createElement(House, { roofColor: "red" });

export default App;
