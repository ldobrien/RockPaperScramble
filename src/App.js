import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './Components/Canvas';
import Circle from './Components/Circle';

class App extends Component {
	componentDidMount() {
    const self = this;
    setInterval(() => {
        self.props.rotateObjects(self.canvasMousePosition);
    }, 10);
    setInterval(() => {
        self.props.moveObjects(self.canvasMousePosition);
    }, 10);
  }


  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <div>
        <Canvas 
        	angle={this.props.angle}
        	x={this.props.x}
        	y={this.props.y}
          r={this.props.r}
        	trackMouse={event => (this.trackMouse(event))}
          
        />
      </div>
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  rotateObjects: PropTypes.func.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;
