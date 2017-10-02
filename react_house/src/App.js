import React from 'react';
import './App.css';
import Images from './Images';
import styled from 'styled-components';
import { StaggeredMotion, spring, presets } from 'react-motion';

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
        <Cat status={this.state.isDoorOpen ? 'standing' : 'sleeping'} />
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
  return <CatImg src={img} />;
}

const Door = (props) => {
  const img = props.isOpen
    ? Images.door_open
    : Images.door_closed;
  return <DoorImg src={img} onClick={props.onClick} />;
};

const Container = styled.div`
  background: cyan;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 20px;
`;

const BlockDiv = styled.div`
  width: 100px;
  height: 30px;
  background: blue;
  padding: 5px;
  margin: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Block = ({ id, style }) => (
  <BlockDiv style={style}>{id}</BlockDiv>
);

const Animations = () => (
  <StaggeredMotion
    defaultStyles={Array(8).fill(0).map((_, i) => ({ y: -80, opacity: 0 }))}
    styles={prevStyles => prevStyles.map((_, i) => {
      return i === 0
        ? { y: spring(0), opacity: spring(1) }
        : { y: spring(prevStyles[i - 1].y, presets.stiff),  opacity: spring(prevStyles[i-1].opacity, presets.stiff)}
    })}
  >
    {
      styles => (
        <Container>
          {
            styles.map((style, i) => 
              <Block id={i + 1} key={i} 
                style={{ transform: `translateY(${style.y}px)`, opacity: style.opacity}}/>)
          }
        </Container>
      )
    }
  </StaggeredMotion>
);

const App = () => <Animations />;

export default App;
