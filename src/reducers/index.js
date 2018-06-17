import { ROTATE_OBJECTS } from '../actions';
import { MOVE_OBJECTS } from '../actions';
import rotateObjects from './rotateObjects';
import moveObjects from './moveObjects';

const initialState = {
	angle: 45,
  // direction: "UP",
    x: 200,
    y: 200,
    r: 10,
    enemies: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // case COLLIDE:
    //   return onCollide(state, action, {this.props.r}, )
    case ROTATE_OBJECTS:
      return rotateObjects(state, action);
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;