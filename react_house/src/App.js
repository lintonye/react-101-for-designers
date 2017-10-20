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
  background: ${ props => props.color };
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
    <Roof color="tomato" />
    <Wall />
    <Window />
    <Door />
  </HouseDiv>
);

const Roof = (props) => <RoofImg src={Images.roof} color={props.color}/>;
const Wall = () => <WallImg src={Images.wall} />;
const Window = () => <WindowImg src={Images.window} />;
const Door = () => <DoorImg src={Images.door_closed} />;

const App = () => <House />;

export default App;
