import React from 'react';
import './App.css';
import Images from './Images';

/*

Exercises:
  - Make the window open/close when the user clicks on it

*/

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

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    const handleClick = () => {
      if (this.state.isOpen) {
        this.setState({ isOpen: false });
      } else {
        this.setState({ isOpen: true });
      }
    }
    let image = Images.window_open;
    if (this.state.isOpen === false) {
      image = Images.window_closed;
    }
    return <img src={image} className="window" onClick={handleClick} />;
  }
}

class Door extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    const handleClick = () => {
      if (this.state.isOpen) {
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
