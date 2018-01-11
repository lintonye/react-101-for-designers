import React from 'react';
import './App.css';
import Images from './Images';

/*

Exercises:
  1. Make the window clickable, i.e. when you click on it, the window
     should open or close just like the door. Do NOT convert the Window
     component to class component.
  2. Wake up the cat when the window or the door (or both) is open. 
    If both the window and the door are closed, make the cat sleep.

*/

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = { doorOpen: false };
  }
  handleDoorClick = () => {
    if (this.state.doorOpen === true) {
      this.setState({ doorOpen: false });
    } else {
      this.setState({ doorOpen: true });
    }
  };
  render() {
    const catStatus = this.state.doorOpen ? 'awake' : 'sleeping';
    return (
      <div className="house">
        <Roof color="brown" />
        <Wall />
        <Door onClick={this.handleDoorClick} isOpen={this.state.doorOpen} />
        <Window />
        <Cat status={catStatus} />
      </div>
    );
  }
}

const Cat = (props) =>
  <img src={props.status === 'sleeping' ? Images.cat_sleeping : Images.cat_standing}
    className="cat" />

const Roof = (props) => (
  <img src={Images.roof} className="roof" style={{ background: props.color }} />
);
const Wall = () => <img src={Images.wall} className="wall" />

const Window = (props) =>
  <img src={props.isOpen ? Images.window_open : Images.window_closed}
    className="window" />

const Door = (props) =>
  <img src={props.isOpen ? Images.door_open : Images.door_closed}
    className="door" onClick={props.onClick} />


const App = () => <House />;

export default App;
