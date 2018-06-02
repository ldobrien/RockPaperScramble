import AppDispatcher from '../dispatcher/AppDispatcher.js';

const AppActions = {
	setCounter: function(num) {
		AppDispatcher.dispatch( {
			actionType: 'setCounter',
			num: num
		});
	}
};

export default AppActions;