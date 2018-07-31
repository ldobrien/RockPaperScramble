import {
  createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterPositions,
  flyingObjectsColors
} from '../utils/constants';

export default (state) => {
  console.log(state);
  if ( ! state.gameState.started) return state; // game not running

  const now = (new Date()).getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  );

  if ( ! createNewObject) return state; // no need to create objects now

  const id = (new Date()).getTime();
  const predefinedPosition = Math.floor(Math.random() * (60));
  const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];

  const numberOfColors = Math.floor(Math.random() * (3));
  const flyingObjectsColor = flyingObjectsColors[numberOfColors];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    color: flyingObjectsColor,
    createdAt: (new Date()).getTime(),
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject
      ],
      lastObjectCreatedAt: new Date(),
    }
  }
}