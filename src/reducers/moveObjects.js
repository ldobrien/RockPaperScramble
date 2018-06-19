import {calculateAngle} from '../utils/formulas';
// import { easeElastic } from "d3-ease";

function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition;

  return {
    ...state,
    x: x,
    y: y,
    timing: {
      duration: 13000,
      // ease: easeElastic
    }
  };
}

export default moveObjects;