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

const styles = {
  roof: {
    left: 0, 
    top: 0,
    marginLeft: 50,
  }
}

const Roof = () => <img style={styles.roof} src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Froof.png?1501113882154" />;
const Wall = () => <img className="wall" src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fwall.png?1501113882297" />;
const Window = () => <img className="window" src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fwindow.png?1501113882112" />;
const Door = () => <img className="door" src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fdoor_close.png?1501113881433" />;

const App = () => <House />;

export default App;
