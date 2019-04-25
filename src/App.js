import React, { Component } from 'react';
import Header from './Header/Header'
//import Footer from './Footer/Footer'
//import Overlay from './Overlay/Overlay'
import Round from './Round/Round'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Speed game</h1>
      <Header />
      <div className="allrounds">
        <Round />
        <Round />
        <Round />
        <Round />
        </div>

        <div class="bothbuttons">
      <div class="button start" onclick="pickNext()">
        <p>Start game</p>
      </div>

      <div class="button stop">
        <p>Stop game</p>
      </div>
    </div>
      </div>
    );
  }
}

export default App;
