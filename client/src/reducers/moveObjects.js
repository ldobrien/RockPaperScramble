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
  let newState = createFlyingObjects(state);
  // const newStateGameState = newState.gameState;
  const now = (new Date()).getTime();
  let flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 8000
  ));

  const objectsDestroyed = checkCollisions(x, y, state.r, flyingObjects);
  // console.log(objectsDestroyed.length);
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));
  // console.log(flyingDiscsDestroyed.length);
  // console.log(flyingDiscsDestroyed);
  flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    //leaderboard: state.leaderboard,
    x: x,
    y: y,
    r: state.r,
  };
}

export default moveObjects;