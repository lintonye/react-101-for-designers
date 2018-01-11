import React from 'react';
import './App.css';
import Images from './Images';

/**
 
Exercises:

- Convert all JSX tags in this file into JavaScript code.

Hint 1: 

  <MyComp />

  ==> 

  React.createElement(MyComp);


Hint 2:

  <MyComp>
    <div>Hello</div>
    <Child2 />
  </MyComp>

  ==>

  React.createElement(MyComp, 
    {}, 
    React.createElement('div', {}, 'Hello'),
    React.createElement(Child2)
  );

*/
const House = () => <h2>This is House!</h2>;

const houses = [
  <House />, 
  <House />
]

const App = () => 
  <div>
    { houses }
  </div>

export default App;
