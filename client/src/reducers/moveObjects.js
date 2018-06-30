import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
// import { easeElastic } from "d3-ease";
import { PropTypes } from 'react'
import checkCollisions from './checkCollisions';

function moveObjects(state, action) {
  // if (!action.mousePosition) return state;
    const {x,y} = action.mousePosition || {
    x: 0,
    y: 0,
  };
  const newState = createFlyingObjects(state);
  // const newStateGameState = newState.gameState;
  const now = (new Date()).getTime();
  let flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ));

  const objectsDestroyed = checkCollisions(x, y, state.r, flyingObjects);
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));
  flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    x: x,
    y: y,
    r: state.r,
  };
}

export default moveObjects;