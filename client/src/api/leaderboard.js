import Auth from '../modules/Auth';

class LeadersApi {
  static fetchAll() {
    return fetch('/api/users/topscores', {
      method: 'GET',
      headers: { 
      	'Authorization': `bearer ${Auth.getToken()}`,
        'Content-Type': 'application/json',
      }
    })
  } 
	static writeLeader() {
	    return fetch(`/api/users/topscores/${Auth.getUserIdTheHackyWay}`, {
	      method: 'PUT',
	      headers: { 
	      	'Authorization': `bearer ${Auth.getToken()}`,
	        'Content-Type': 'application/json',
	      }
	    })
	} 
}

export default LeadersApi;