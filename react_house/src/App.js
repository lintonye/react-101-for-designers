import React from 'react';
import './App.css';
import Images from './Images';
import styled from 'styled-components';

// styled-components, npm package... npm install

const HouseDiv = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
`;

const Img = styled.img`
  position: absolute;
`

const RoofImg = Img.extend`
  left: 0;
  top: 0;
`

const WallImg = Img.extend`
  left: 5px;
  top: 48px;
`

const WindowImg = Img.extend`
  left: 200px;
  top: 182px;
`

const DoorImg = Img.extend`
  left: -25px;
  top: 182px;
  cursor: pointer;
`

const House = () => (
  <HouseDiv>
    <Roof color="lightsalmon" hasSolarPanel={true}/>
    <Wall />
    <Window />
    <Door />
  </HouseDiv>
);

// const props = { color: "lightsalmon", hasSolarPanel: true }
// Roof(props);
const Roof = (props) => <RoofImg style={{ background: props.color}} src={Images.roof} />;
const Wall = () => <WallImg src={Images.wall} />;
const Window = () => <WindowImg src={Images.window} />;
const Door = () => <DoorImg src={Images.door_closed} />;

const App = () => <House />;

export default App;
