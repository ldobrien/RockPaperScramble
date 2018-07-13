
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
	// angle: 45,
  // direction: "UP",
    x: 0,
    y: 0,
    r: 30,
    team: "Rock",
    // circles: [],
    // wide: 100,
    // high: 100,
    gameState: initialGameState
    //leaderboard: [1,2,3,4]
};


function reducer(state = initialState, action) {
  switch (action.type) {
    // case COLLIDE:
    //   return onCollide(state, action, {this.props.r}, )
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