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

const CatImg = Img.extend`
  width: 130px;
  height: 100px;
  left: 190px;
  top: 270px;
`;

const House = () => (
  <HouseDiv>
    <Roof />
    <Wall />
    <Window />
    <Door />
    <Cat status="sleeping" />
  </HouseDiv>
);

// functional component
// stateless
const Roof = () => <RoofImg src={Images.roof} />;
const Wall = () => <WallImg src={Images.wall} />;
const Window = () => <WindowImg src={Images.window} />;
//const Door = () => <DoorImg src={Images.door_closed} />;

const Cat = (props) => {
  const img = props.status === 'awake'
    ? Images.cat_standing
    : Images.cat_sleeping;
  return <CatImg src={img} />;
}

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
