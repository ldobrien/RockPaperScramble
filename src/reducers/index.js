import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';

const initialState = {
  direction: "UP",
  x: 0,
  y: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;