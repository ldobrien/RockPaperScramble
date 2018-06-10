import {calculateAngle} from '../utils/formulas';

function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;

  const new_x = x;
  const new_y = y;
  console.log(new_x,new_y);
  const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    angle,
    new_x,
    new_y,
  };
}

export default moveObjects;