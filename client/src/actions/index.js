import * as types from './actionTypes';

export const moveObjects = mousePosition => ({
  type: types.MOVE_OBJECTS,
  mousePosition,
});

export const rotateObjects = mousePosition => ({
  type: types.ROTATE_OBJECTS,
  mousePosition,
});

export const onCollide = mousePosition => ({
  type: types.ON_COLLIDE,
  mousePosition,
});

export const startGame = () => ({
  type: types.START_GAME,
});

export const LoginSuccess = email => ({
	type: types.LOGIN_SUCCESS,
	email: email
});