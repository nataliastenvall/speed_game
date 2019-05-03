import React, { Component } from 'react';
import Score from './Score/Score'
//import Footer from './Footer/Footer'
import Overlay from './Overlay/Overlay'
import Round from './Round/Round'
import './App.css';

function getRndInteger(min, max){
return  Math.floor(Math.random() * (max - min+1)) + min;
}

class App extends Component {
  state = {
current: 0,
score:0,
moves:0,
showOverlay: false
};
pace = 1500;
timer = undefined;


pickNext = () => {
  if (this.state.moves >= 5){
    this.gameOverHandler();
    return;
  }

  let nextActive = undefined;

  do {
    nextActive = getRndInteger(1,4);
  } while (nextActive === this.state.current);

  this.setState(prevState => {
    return {
      moves:prevState.moves +1
    };
  });
      console.log(this.state.moves);

  this.setState ({
  current:nextActive
  });

  this.pace *= 0.95;
  this.timer = setTimeout(this.pickNext.bind(this), this.pace)
}

startGameHandler = () => {
  this.pickNext();
}

clickHandler =(btnId) => {
  console.log('clicked!', btnId);
  if(this.state.current !== btnId) {
    this.gameOverHandler();
    return;
  }
  this.setState({
    moves:0
  });
  
  this.setState(prevState => {
    return {
      score:prevState.score +1
    };
  });
};

gameOverHandler =()=>{
  clearTimeout(this.timer);
this.setState({
  showOverlay: true
})
}

  render() {
    return (
      <div className="App">
      <h1>Speed game</h1>
      <Score score={this.state.score}/>
      <div className="allrounds">
        <Round
        active= {this.state.current === 1}
        myclick ={() => this.clickHandler(1)} />
        <Round
        active= {this.state.current === 2}
        myclick ={() => this.clickHandler(2)} />
        <Round
        active= {this.state.current === 3}
        myclick ={() => this.clickHandler(3)} />
        <Round
        active= {this.state.current === 4}
        myclick ={() => this.clickHandler(4)} />
        </div>


        <div className="bothbuttons">
      <button className="button start" onClick={this.startGameHandler}>
        Start Game
      </button>

      <button className="button stop" onClick={this.gameOverHandler}>
        Stop Game
      </button>
    </div>
    {this.state.showOverlay && <Overlay score={this.state.score}/>}
      </div>
    );
  }
}

export default App;
