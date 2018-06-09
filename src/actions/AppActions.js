import AppDispatcher from '../dispatcher/AppDispatcher.js';

const AppActions = {
	setposn: function(posx, posy) {
		AppDispatcher.dispatch( {
			actionType: 'setPosn',
			posx: posx,
			posy: posy
		});
	}
};

export default AppActions;