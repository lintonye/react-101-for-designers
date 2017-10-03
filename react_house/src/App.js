import React from 'react';
import './App.css';

const House = () => (
  <div>
    <Roof />
    <Wall />
    <Window />
    <Door />
  </div>
);

const Roof = () => <div>Roof</div>;
const Wall = () => <div>Wall</div>;
const Window = () => <div>Window</div>;
const Door = () => <div>Door</div>;

const App = () => <House />;

export default App;
