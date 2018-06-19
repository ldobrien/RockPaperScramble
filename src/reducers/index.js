import { ROTATE_OBJECTS } from '../actions';
import { MOVE_OBJECTS } from '../actions';
import { ON_COLLIDE } from '../actions';
import rotateObjects from './rotateObjects';
import moveObjects from './moveObjects';
import onCollide from './onCollide';
// import createEnemies from './enemies';

const initialState = {
	// angle: 45,
  // direction: "UP",
    x: 0,
    y: 0,
    r: 10,
    team: "Rock",
    // circles: [],
    // wide: 100,
    // high: 100,
};


function reducer(state = initialState, action) {
  switch (action.type) {
    // case COLLIDE:
    //   return onCollide(state, action, {this.props.r}, )
    case ROTATE_OBJECTS:
      return rotateObjects(state, action);
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case ON_COLLIDE:
      return onCollide(state, action);
    default:
      return state;
  }
}

export default reducer;