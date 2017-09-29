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
    <Roof />
    <Wall />
    <Window />
    <Door shape="rectangle" />
  </HouseDiv>
);

// functional component
// stateless
const Roof = () => <RoofImg src={Images.roof} />;
const Wall = () => <WallImg src={Images.wall} />;
const Window = () => <WindowImg src={Images.window} />;
//const Door = () => <DoorImg src={Images.door_closed} />;

// class component
// inherit properties, methods
// stateful
// state
class Door extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }
  
  render() {
    const handleClick = () => {
      if (this.state.isOpen)
        this.setState({ isOpen: false });
      else
        this.setState({ isOpen: true });
    }

    const img = this.state.isOpen
      ? Images.door_open 
      : Images.door_closed;
    return <DoorImg src={img} onClick={ handleClick }/>;
  }
}

const App = () => <House />;

export default App;
