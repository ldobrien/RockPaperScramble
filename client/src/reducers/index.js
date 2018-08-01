
import { MOVE_OBJECTS, START_GAME, ON_COLLIDE, LOGIN_SUCCESS } from '../actions';
import moveObjects from './moveObjects';
import startGame from './initialState';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 1,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
};
const initialState = {
	
    x: 0,
    y: 0,
    r: 30,
    score: 0,
    color: "yellow",
    gameState: initialGameState,
    email: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    default:
      return state;
  }
}

export default reducer;