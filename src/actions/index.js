export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const ROTATE_OBJECTS = 'ROTATE_OBJECTS';

export const rotateObjects = mousePosition => ({
  type: ROTATE_OBJECTS,
  mousePosition,
});