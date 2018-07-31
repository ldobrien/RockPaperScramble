import * as types from './actionTypes';
import LeadersApi from '../api/leaderboard';
// ... MOVE_OBJECTS and START_GAME ...

export const loggedIn = player => ({
  type: LOGGED_IN,
  player,
});

// sets the action type to FETCH_LEADERS_SUCCESS, so the reducers
// knows that the action that was just called was fetch leaders success, 
// and passes along the leaders data to the reducer
export function fetchLeadersSuccess(leaders) {
  return { type: types.FETCH_LEADERS_SUCCESS, leaders };
}

// the job of this function is to ask the API class to make a call
// to your backend server to fetchAll the leaders. It waits for the data
// to return successfully, then sends out a dispatch call that the data
// was returned successfully, and passes it on to the next function. 
export function fetchLeaders() {
  console.log("Fetch Leaders");
  return (dispatch) => {
    LeadersApi.fetchAll()
      .then((response) => {
        return response.json();
      }).then((json) => {
        dispatch(fetchLeadersSuccess(json));
      })
    }
}