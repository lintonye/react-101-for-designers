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
  left: 160px;
  top: 182px;
  cursor: pointer;
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
  constructor(props) {
    super(props);
    this.state = { isWindowOpen: false, isDoorOpen: false };
  }
  render() {
    const handleDoorClick = () => {
      if (this.state.isDoorOpen)
        this.setState({ isDoorOpen: false });
      else
        this.setState({ isDoorOpen: true });
    };
    const handleWindowClick = () => {
      if (this.state.isWindowOpen)
        this.setState({ isWindowOpen: false });
      else
        this.setState({ isWindowOpen: true });
    };
    const catStatus = this.state.isWindowOpen || this.state.isDoorOpen
      ? 'standing'
      : 'sleeping';
    return (
      <HouseDiv>
        <Roof />
        <Wall />
        <Door isOpen={this.state.isDoorOpen} onClick={handleDoorClick} />
        <Window isOpen={this.state.isWindowOpen} onClick={handleWindowClick} />
        <Cat status={catStatus} />
      </HouseDiv>
    );
  }
}

// functional component
// stateless
const Roof = () => <RoofImg src={Images.roof} />;
const Wall = () => <WallImg src={Images.wall} />;
const Window = ({ isOpen, onClick }) =>
  <WindowImg src={isOpen ? Images.window_open : Images.window_closed}
    onClick={onClick} />;
const Door = ({ isOpen, onClick }) =>
  <DoorImg src={isOpen ? Images.door_open : Images.door_closed}
    onClick={onClick} />;

const Cat = (props) => {
  const img = props.status === 'standing'
    ? Images.cat_standing
    : Images.cat_sleeping;
  return <CatImg src={img} />;
}

const App = () => <House />;

export default App;
