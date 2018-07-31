export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const ROTATE_OBJECTS = 'ROTATE_OBJECTS';
export const ON_COLLIDE = 'ON_COLLIDE';
export const START_GAME = 'START_GAME';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

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

export const startGame = () => ({
  type: START_GAME,
});

export const LoginSuccess = email => ({
	type: LOGIN_SUCCESS,
	email: email
});