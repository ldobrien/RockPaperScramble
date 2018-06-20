import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './Components/Canvas';
import Circle from './Components/Circle';

// import * as Auth0 from 'auth0-web';

// Auth0.configure({
//   domain: 'rockpaperscramble.auth0.com',
//   clientID: 'En8lkENVf3eXetciUx9hFxH0j3Or6GRK',
//   redirectUri: 'http://localhost:3000/',
//   responseType: 'token id_token',
//   scope: 'openid profile manage:points',
// });


class App extends Component {
	componentDidMount() {
    const self = this;
    // Auth0.handleAuthCallback();

    // Auth0.subscribe((auth) => {
    //   console.log(auth);
    // });

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

  render() {
    return (
      <div>
        <Canvas 
        	// angle={this.props.angle}
        	x={this.props.x}
        	y={this.props.y}
          r={this.props.r}
          gameState={this.props.gameState}
          startGame={this.props.startGame}
        	trackMouse={event => (this.trackMouse(event))}
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
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;

