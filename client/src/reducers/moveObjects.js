import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
// import { easeElastic } from "d3-ease";
import { PropTypes } from 'react';
import checkCollisions from './checkCollisions';
import Circle  from '../Components/Circle.jsx';

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

  const objectsDestroyed = checkCollisions(Circle, flyingObjects);
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
      Circle,
    },
    x: x,
    y: y,
    r: state.r,
    color: state.color,
  };
}

export default moveObjects;