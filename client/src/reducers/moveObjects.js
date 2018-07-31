import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import { PropTypes } from 'react'
import checkCollisions from './checkCollisions';
import checkBadCollisions from './checkBadCollisions';
import initialGameState from './index.js'

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

  
  const bef = flyingObjects.length;
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