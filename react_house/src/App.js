import React from 'react';
import './App.css';
import Images from './Images';

/*
Exercises:

1. In App.js, make the house number on the wall configurable, i.e. 
   you can make the house number "123" with: <House number='123'/>

2. Can you make two houses with different roof colors and house numbers?

const App = () => (
  <div>
    <House roofColor='blue' number='123'/>
    <House roofColor='red' number='321' />
  </div>
);

*/

const House = ({ number }) => (
  <div className='house'>
    <Roof color='white' />
    <Wall />
    <Window />
    <Door />
  </div>
);

const Roof = ({ color }) => (
  <img src={Images.roof} className="roof" style={{ background: color }} />
);

const Wall = () => (
  <div>
    <img src={Images.wall} className="wall" />
    <div className="house-number">205</div>
  </div>
);

const Window = () => <img src={Images.window} className="window" />;
const Door = () => <img src={Images.door_closed} className='door' />;

const App = () => <House />;

export default App;
