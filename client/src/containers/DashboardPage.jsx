import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../Components/Dashboard.jsx';
import Game from './game.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import registerServiceWorker from '../registerServiceWorker.js';
import 'whatwg-fetch';


var store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

class DashboardPage extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      userHighScores: [],
    };
  }
  
  componentDidMount(props) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();

    fetch('/api/users/topscores', {
      method: 'GET',
      headers: { 'Authorization': `bearer ${Auth.getToken()}`,
      'Content-Type': 'application/json' }
    }) 
    .then(res => res.json())
    .then(json => {
     
      this.setState({
        userHighScores: json
      });
      });
  }

  render() {

    return (
      <div>
        <Provider store={store}>
            <Game leaderboard={this.state.userHighScores}/>
        </Provider>,
      </div>);
    registerServiceWorker();

}
}


export default DashboardPage;