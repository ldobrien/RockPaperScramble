import { connect } from 'react-redux';

import App from '../App';
import { rotateObjects } from '../actions/index';
import {moveObjects} from '../actions/index';
import {onCollide} from '../actions/index';

const mapStateToProps = state => ({
  x: state.x,
  y: state.y,
  r: state.r,
  // width: state.wide,
  // height: state.high,
});

const mapDispatchToProps = dispatch => ({
  rotateObjects: (mousePosition) => {
    dispatch(rotateObjects(mousePosition));
  },
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  onCollide: (mousePosition) => {
    dispatch(onCollide(mousePosition));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
