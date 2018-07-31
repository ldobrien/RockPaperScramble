import * as types from './actionTypes';

export const moveObjects = mousePosition => ({
  type: types.MOVE_OBJECTS,
  mousePosition,
});

export const startGame = () => ({
  type: types.START_GAME,
});

export const LoginSuccess = email => ({
	type: types.LOGIN_SUCCESS,
	email: email
});