import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    return (
    <div>
<p>Your score: {this.props.score}</p>
    </div>
    );
  }
}

export default Score;
