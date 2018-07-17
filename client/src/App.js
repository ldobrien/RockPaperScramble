import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { PropTypes } from 'react'
import { getCanvasPosition } from './utils/formulas';
import Canvas from './Components/Canvas.jsx';
import Circle from './Components/Circle.jsx';

//const 


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.createLeaderboard = this.createLeaderboard.bind(this);
  // }

	componentDidMount() {
    const self = this;

    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    setInterval(() => {
        self.props.onCollide(self.canvasMousePosition);
    }, 1);

    window.onresize = () => {
      const cnv = document.getElementById('RockPaperScramble');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  createLeaderboard(id) {
    
  }

  render() {
    return (
      <div>
        <Canvas 

        leaderboard = {this.props.leaderboard}
        	// angle={this.props.angle}
          leaderboard={this.props.leaderboard}
          x={this.props.x}
          y={this.props.y}
          r={this.props.r}
          score={this.props.score}
          gameState={this.props.gameState}
          startGame={this.props.startGame}
          trackMouse={event => (this.trackMouse(event))}
          // leaderboard=
          // width={this.props.width}
          // height={this.props.height}
        />

      </div>
    );
  }
}

App.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;

