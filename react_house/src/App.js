import React from 'react';
import './App.css';
import Images from './Images';

/**
 
Exercises:

1. Add roof, wall, window and door to the house (all plain text, e.g. `<div>window</div>`)
2. Display two houses, one after another. The expected output is:

roof
wall
window
door
----------
roof
wall
window
door

Hint: For the horizontal separator line between the houses, use `<hr />`.

*/
const House = () => (
  <div>
    <Roof />
    <Wall />
    <Window />
    <Door />
  </div>
);

const Roof = () => <div>roof</div>;
const Wall = () => <div>wall</div>;
const Window = () => <div>window</div>;
const Door = () => <div>door</div>;

const App = () => 
  <div>
    <House />
    <hr />
    <House />
  </div>

export default App;
