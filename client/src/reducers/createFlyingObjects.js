import {
  createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterPositions,
  flyingObjectsColors
} from '../utils/constants';

export default (state) => {
  if ( ! state.gameState.started) return state;
  const now = (new Date()).getTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  );
  if ( ! createNewObject) return state; 
  const id = (new Date()).getTime();
  const flyingObjectPosition = flyingObjectsStarterPositions[Math.floor(Math.random() * (60))];
  const flyingObjectsColor = flyingObjectsColors[Math.floor(Math.random() * (3))];
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