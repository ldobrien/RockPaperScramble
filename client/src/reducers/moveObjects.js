import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
// import { easeElastic } from "d3-ease";

function moveObjects(state, action) {
  // if (!action.mousePosition) return state;
    const {x,y} = action.mousePosition || {
    x: 0,
    y: 0,
  };
  const newState = createFlyingObjects(state);
  const newStateGameState = newState.gameState;
  const now = (new Date()).getTime();
  const flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 4000
  ));
  return {
    gameState: {
      newStateGameState,
      flyingObjects,
    },
    x: x,
    y: y,
  };
}

export default moveObjects;