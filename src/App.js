import React, { Component } from 'react';
//import Header from './Header/Header'
//import Footer from './Footer/Footer'
//import Overlay from './Overlay/Overlay'
import Round from './Round/Round'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="allrounds">
        <Round />
        <Round />
        <Round />
        <Round />
        </div>
      </div>
    );
  }
}

export default App;
