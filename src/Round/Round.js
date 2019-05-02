import React, { Component } from 'react';
import './Round.css';

class Round extends Component {
  render() {
    return (
    <div>
    <div className={'round' + (this.props.active ? ' active' : '')} onClick={this.props.myclick}></div>
    </div>
    );
  }
}

export default Round;
