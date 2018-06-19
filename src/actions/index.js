export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const ROTATE_OBJECTS = 'ROTATE_OBJECTS';
export const ON_COLLIDE = 'ON_COLLIDE';

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const rotateObjects = mousePosition => ({
  type: ROTATE_OBJECTS,
  mousePosition,
});

export const onCollide = mousePosition => ({
  type: ON_COLLIDE,
  mousePosition,
});