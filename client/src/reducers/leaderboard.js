import initialState from './initialState';
import * as types from '../actions/actionTypes';

// this is what your redux store looks like!
// store: {
// 	checkBadCollisions: {
// 	    x: 0,
// 	    y: 0,
// 	    r: 30,
// 	    score: 0,
// 	    color: "yellow",
// 	    gameState: initialGameState,
// 	    leaders: [],
// 	    email: "",
// 	},
//     leaderboard: {
// 	    x: 0,
// 	    y: 0,
// 	    r: 30,
// 	    score: 0,
// 	    color: "yellow",
// 	    gameState: initialGameState,
// 	    leaders: [ {
// 	    	user1: 23,
// 	    	user2: 22,
// 	    	user3: 23
// 	    }],
// 	    email: "",
// 	};
//     checkCol: {
// 	    x: 0,
// 	    y: 0,
// 	    r: 30,
// 	    score: 0,
// 	    color: "yellow",
// 	    gameState: initialGameState,
// 	    leaders: [],
// 	    email: "",
// 	},
//     createFlyObjects,
//     gameReducer,
//     moveObjects,
//     startGame
// }

// the ONLY job of reducers is to update the global state, i.e. the redux store
export default function leadersReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LEADERS_SUCCESS:
            return {...state, leaders: action.leaders};
        default:
            return state;
    }
}