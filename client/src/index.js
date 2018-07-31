import React from 'react';
import Dashboard from '/Components/Dashboard.jsx';
import {getCanvasPosition} from '/utils/formulas';
import Game from './containers/game.js';
import {Provider} from 'react-redux';
import {store} from '/store/configurestore';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker.js';
import 'whatwg-fetch';


// var store = createStore(reducer, /* preloadedState, */
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

// ask:
ReactDOM.render(
    <Provider store={store}>
        <Game leaderboard={this.state.userHighScores}/>
        <Dashboard secretData={this.state.secretData}/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

