import * as types from './actionTypes';
import LeadersApi from '../api/getleaderboard';
// ... MOVE_OBJECTS and START_GAME ...

export const loggedIn = player => ({
  type: LOGGED_IN,
  player,
});

export function fetchLeadersSuccess(leaders) {
    return { type: types.FETCH_LEADERS_SUCCESS, leaders };
}

export function fetchLeaders() {
  return (dispatch) => {
      LeadersApi.fetchAll()
          .then((response) => {
            return response.json();
          }).then((json) => {
            dispatch(fetchLeadersSuccess(json));
          })
      }
}