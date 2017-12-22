import React from 'react';
import './App.css';
import Images from './Images';
import styled from 'styled-components';

const House = () => (
  <div className="house">
    <Roof />
    <Wall />
    <Window />
    <Door />
  </div>
);

const styles = {
  wall: {
    left: '5px', 
    top: '48px',
  }
}

const WallImg = styled.img`
  left: 5px;
  top: 48px;
`;

const Roof = () => <img className="roof" src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Froof.png?1501113882154" />;
const Wall = () => <WallImg src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fwall.png?1501113882297" />;
const Window = () => <img className="window" src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fwindow.png?1501113882112" />;
const Door = () => <img className="door" src="https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fdoor_close.png?1501113881433" />;

const App = () => <House />;

export default App;
