import { connect } from 'react-redux';

import App from '../App';
import { rotateObjects } from '../actions/index';
import {moveObjects} from '../actions/index';

const mapStateToProps = state => ({
	angle: state.angle,
	  x: state.x,
	  y: state.y,
});

const mapDispatchToProps = dispatch => ({
  rotateObjects: (mousePosition) => {
    dispatch(rotateObjects(mousePosition));
  },
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
});

// const mapDispatchToProps = dispatch => ({
//   moveObjects: (mousePosition) => {
//     dispatch(moveObjects(mousePosition));
//   },
// });

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;