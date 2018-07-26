import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function leadersReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LEADERS_SUCCESS:
      return { ...state, data: action.leaders };
    default:
      return state;
  }
}