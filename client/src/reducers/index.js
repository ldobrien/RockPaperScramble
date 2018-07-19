
import { MOVE_OBJECTS, START_GAME, ON_COLLIDE } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import onCollide from './onCollide';
// import createEnemies from './enemies';
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
    team: "Rock",
    gameState: initialGameState,
    
};


function reducer(state = initialState, action) {
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

export default reducer;