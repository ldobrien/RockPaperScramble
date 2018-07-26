
import { MOVE_OBJECTS, START_GAME, ON_COLLIDE } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 1,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
};


function gameReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:

      return startGame(state, initialGameState);
    case ON_COLLIDE:
      return onCollide(state, action);
    default:
      return state;
  }
}

export default gameReducer;