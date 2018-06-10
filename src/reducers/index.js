import { ROTATE_OBJECTS } from '../actions';
import { MOVE_OBJECTS } from '../actions';
import rotateObjects from './rotateObjects';
import moveObjects from './moveObjects';

const initialState = {
	angle: 45,
  // direction: "UP",
  x: 20, // WANT THIS TO BE MOUSE POSN??
  y: 20,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ROTATE_OBJECTS:
      return rotateObjects(state, action);
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;