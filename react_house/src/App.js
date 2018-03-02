import React from 'react';
import './App.css';
import Images from './Images';

const House = () => (
  <div className="house">
    <Roof color="brown" />
    <Wall />
    <Door />
    <Window />
  </div>
);

const Roof = (props) => (
  <img src={Images.roof} className="roof" style={{ background: props.color }} />
);
const Wall = () => <img src={Images.wall} className="wall" />;
const Window = () => <img src={Images.window_closed} className="window" />;

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    const handleClick = () => {
      if (this.state.isOpen === false) {
        this.setState({ isOpen: false });
      } else {
        this.setState({ isOpen: true });
      }
    }
    let image = Images.door_open;
    if (this.state.isOpen === false) {
      image = Images.door_closed;
    }
    return <img src={image} className='door' onClick={handleClick} />;
  }
}


const App = () => <House />;

export default App;
