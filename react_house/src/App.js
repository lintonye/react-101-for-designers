import React from 'react';
import './App.css';
import Images from './Images';

/*

Exercises:
  - Convert the `Roof` component to a class component which properly handles the `color` prop.

*/

const House = () => (
  <div className="house">
    <Roof color="brown" />
    <Wall />
    <Door />
    <Window />
  </div>
);

class Roof extends React.Component {
  render() {
    return <img src={Images.roof} className="roof" style={{ background: this.props.color }} />
  }
} 

const Wall = () => <img src={Images.wall} className="wall" />;
const Window = () => <img src={Images.window_closed} className="window" />;

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
