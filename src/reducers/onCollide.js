function onCollide(state, action, radius1, radius2) {
  // if (!action.collide) return state;
  // const { x, y } = action.mousePosition;

  const r = radius1 + radius2;
  // const cx = x;
  // const cy = y;
  // const angle = calculateAngle(0, 0, x, y);
  return {
    ...state,
    r,
  };
}

export default moveObjects;