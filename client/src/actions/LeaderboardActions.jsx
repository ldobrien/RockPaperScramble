export const LEADERBOARD_LOADED = 'LEADERBOARD_LOADED';
export const LOGGED_IN = 'LOGGED_IN';


export const leaderboardLoaded = players => ({
  type: LEADERBOARD_LOADED,
  players,
});

export const loggedIn = player => ({
  type: LOGGED_IN,
  player,
});