import React, { Component } from 'react';
import './Overlay.css';

class Overlay extends Component {
closeHandler = () =>{
  window.location.reload();
  console.log('ups!');
}

  render() {
    return (
    <div id='result'>
    <div className="textbox">
    <p>Game over!
    Your final score was: {this.props.score}</p>
    <button onClick={this.closeHandler}>Close</button>
        </div>
    </div>
    );
  }
}





export default Overlay;
