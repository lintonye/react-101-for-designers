import React from 'react';
import './App.css';
import Images from './Images';

const House = () => (
  <div className="house">
    <Roof />
    <Wall />
    <Window />
    <Door />
  </div>
);

const Roof = () => <img src={Images.roof} className="roof" />;
const Wall = () => <img src={Images.wall} className="wall" />;
const Window = () => <img src={Images.window} className="window" />;
const Door = () => <img src={Images.door_closed} className="door" />;

const App = () => <House />;

export default App;
