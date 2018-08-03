import createFlyingObjects from './createFlyingObjects';
import checkCollisions from './checkCollisions';
import checkBadCollisions from './checkBadCollisions';

function moveObjects(state, action) {
  const {x,y} = action.mousePosition || {
    x: 0,
    y: 0,
  };
  let newState = createFlyingObjects(state);
  const now = (new Date()).getTime();
  let flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 8000
  ));
  let lives = state.gameState.lives;

  const endGame = checkBadCollisions(state, flyingObjects);
  const objectsDestroyed = checkCollisions(state, flyingObjects);

  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.oppId));
  
  if (endGame === true) {
    lives--;
  }

  flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
      lives,
    },
    x: x,
    y: y,
    r: state.r,
  };
}

export default moveObjects;