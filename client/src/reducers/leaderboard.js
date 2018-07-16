import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function leaderboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LEADERBOARD_SUCCESS:
      return { ...state, errorMessage: '', data: action.leaderboard };
    default:
      return state;
  }
}