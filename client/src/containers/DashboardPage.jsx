import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../Components/Dashboard.jsx';
import PropTypes from 'prop-types';
import {getCanvasPosition} from '../utils/formulas';
import Canvas from '../Components/Canvas.jsx';
import Circle from '../Components/Circle.jsx';
import Game from './game.js';
import {Provider} from 'react-redux';
// import { createStore } from 'redux';
import {store} from '../store/configurestore';
import reducer from '../reducers/gameReducer';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker.js';
import moveObjects from '../reducers/moveObjects';
import 'whatwg-fetch';


// var store = createStore(reducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

class DashboardPage extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         secretData: '',
    //         userHighScores: [],
    //     };
    // }

    componentDidMount(props) {
        // const self = this;
        // ask: This should be a new api call?  Should it go in the loginform? then this whole class can be deleted?
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/dashboard');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
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

        // fetch('/api/users/topscores', {
        // method: 'GET',
        //   headers: { 'Authorization': `bearer ${Auth.getToken()}`,
        //   'Content-Type': 'application/json' }
        // })
        // .then(res => res.json())
        // .then(json => {
        //   // console.log("THE HIG JSON", json);
        //   this.setState({
        //     userHighScores: json
        //   });
        // });


        // ask: this.props.actions.fetchLeaders(); <= moved to canvas.jsx

    }

    //
    // ask: moved this to index.js (new file)
    // render() {
    //
    //     return (
    //         <div>
    //             <Provider store={store}>
    //                 <Game leaderboard={this.state.userHighScores}/>
    //             </Provider>,
    //             // document.getElementById('root');
    //             <Dashboard secretData={this.state.secretData}/>
    //
    //         </div>);
    //     registerServiceWorker();
    //
    // }
}


export default DashboardPage;