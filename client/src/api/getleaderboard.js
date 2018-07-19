
import Auth from '../modules/Auth';

class GetLeaderboard {
  static fetchAll() {
    return fetch('/api/users/topscores', {
      method: 'GET',
      headers: { 'Authorization': ${Auth.getToken()},
      'Content-Type': 'application/json' }
    }) 
  }
}

export default SortedRoomsApi;