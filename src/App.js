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
      <Canvas 
      	angle={this.props.angle}
      	x={this.props.x}
      	y={this.props.y}
      	trackMouse={event => (this.trackMouse(event))}
      />
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





// export default class Example extends Component {
//   constructor(props) {
//     super(props)
//     this.handleKeyDown = this.handleKeyDown.bind(this)
//     this.state = {
//       Circle: 0,
//       result: []
//     }
//   }

//   handleKeyDown(e) {
//     const { Circle, result } = this.state
//     // arrow up/down button should select next/previous list element
//     if (e.keyCode === 38 && Circle > 0) {
//       this.setState( prevState => ({
//         Circle: prevState.Circle - 1
//       }))
//     } else if (e.keyCode === 40 && Circle < result.length - 1) {
//       this.setState( prevState => ({
//         Circle: prevState.Circle + 1
//       }))
//     }
//   }

//   render() {
//     const { Circle } = this.state

//     return (
//       <Container>
//         <Input onKeyDown={ this.handleKeyDown }/>
//         <List>
//           {
//             result.map((item, i) => (
//               <List.Item
//                 key={ item._id }
//                 className={Circle === i ? 'active' : null}
//               >
//                 <span>{ item.title }</span>
//               </List.Item>
//             ))
//           }
//         </List>
//       </Container>
//     )
//   }
// }