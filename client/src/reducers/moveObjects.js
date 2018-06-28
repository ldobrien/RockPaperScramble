import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
// import { easeElastic } from "d3-ease";
import { PropTypes } from 'react'

function moveObjects(state, action) {
  // if (!action.mousePosition) return state;
    const {x,y} = action.mousePosition || {
    x: 0,
    y: 0,
  };
  const newState = createFlyingObjects(state);
  // const newStateGameState = newState.gameState;
  const now = (new Date()).getTime();
  const flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ));
  return {
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    x: x,
    y: y,
  };
}

export default moveObjects;