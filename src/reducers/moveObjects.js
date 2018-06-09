import {calculateAngle} from '../utils/formulas';

function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;

  // const cx = x;
  // const cy = y;
  // const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    // angle,
    x,
    y,
  };
}

export default moveObjects;