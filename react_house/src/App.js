import React from 'react';
import './App.css';
import Images from './Images';
import styled from 'styled-components';
import { Motion, spring, presets } from 'react-motion';

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
  left: 240px;
  top: 270px;
  transition: opacity 500ms;
  &:hover {
    opacity: 0;
  }
`;

class House extends React.Component {
  constructor() {
    super();
    this.state = { isDoorOpen: false };
  }
  render() {
    const handleDoorClick = () => {
      if (this.state.isDoorOpen)
        this.setState({ isDoorOpen: false });
      else
        this.setState({ isDoorOpen: true });
    }
    return (
      <HouseDiv>
        <Roof />
        <Wall />
        <Window />
        <Door isOpen={this.state.isDoorOpen} onClick={handleDoorClick} />
        <Motion 
          defaultStyle={{ deltaY: 0 }}
          style={{ deltaY: spring(this.state.isDoorOpen ? -355 : 0, presets.gentle) }}>
          {
            animatingStyle =>
              <Cat status={this.state.isDoorOpen ? 'standing' : 'sleeping'}
                style={{ transform: `translateY(${animatingStyle.deltaY}px)` }}
              />
          }
        </Motion>
      </HouseDiv>
    )
  }
}

// functional component
// stateless
const Roof = () => <RoofImg src={Images.roof} />;
const Wall = () => <WallImg src={Images.wall} />;
const Window = () => <WindowImg src={Images.window} />;
//const Door = () => <DoorImg src={Images.door_closed} />;

const Cat = (props) => {
  const img = props.status === 'standing'
    ? Images.cat_standing
    : Images.cat_sleeping;
  return <CatImg src={img} style={props.style} />;
}

const Door = (props) => {
  const img = props.isOpen
    ? Images.door_open
    : Images.door_closed;
  return <DoorImg src={img} onClick={props.onClick} />;
};

const App = () => <House />;

export default App;
