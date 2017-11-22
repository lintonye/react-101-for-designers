import React from 'react';
import './App.css';
import Images from './Images';
import styled from 'styled-components';
import { TransitionMotion, spring, stripStyle } from 'react-motion';
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
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;

class House extends React.Component {
  constructor() {
    super();
    this.state = {
      isDoorOpen: false,
      cats: [],
    };
  }
  willEnter(styleThatEntered) {
    const style = stripStyle(styleThatEntered);
    return { x: style.x - 100, y: style.y };
  }
  render() {
    const handleDoorClick = () => {
      if (this.state.isDoorOpen)
        this.setState({ isDoorOpen: false });
      else {
        const x = Math.cos(Math.random() * Math.PI) * 80 + 240;
        const y = Math.random() * 80 + 270;
        this.setState({ isDoorOpen: true, cats: [...this.state.cats, { x, y }] });
      }
    }
    return (
      <HouseDiv>
        <Roof />
        <Wall />
        <Window />
        <Door isOpen={this.state.isDoorOpen} onClick={handleDoorClick} />
        <TransitionMotion
          willEnter={this.willEnter}
          styles={this.state.cats.map(({ x, y }, i) => ({key: i, style: { x: spring(x), y }}))}>
          {
            styles =>
              <div>
                {
                  styles.map(( style, i) =>
                    <Cat status={this.state.isDoorOpen ? 'standing' : 'sleeping'}
                      x={style.style.x} y={style.style.y} key={i} />)
                }
              </div>
          }
        </TransitionMotion>
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
  return <CatImg {...props} src={img} />;
}

const Door = (props) => {
  const img = props.isOpen
    ? Images.door_open
    : Images.door_closed;
  return <DoorImg src={img} onClick={props.onClick} />;
};

const App = () => <House />;

export default App;
