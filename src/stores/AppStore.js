import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';  // ALWAYS IN THE CODE
let _counter = 0;

class AppStore extends EventEmitter {
	emitChange() { // NEED THIS - notifies app to update view
		this.emit(CHANGE_EVENT);
	}
	addChangeListener( callback ) { // NEED THIS
		this.on( CHANGE_EVENT, callback);
	}
	removeChangeListener( callback) { // NEED THIS
		this.removeListener(CHANGE_EVENT, callback);
	}
	getCounterNum() { // returns the counter number
		return _counter;
	}
}

const _appStore = new AppStore();
export default _appStore;

_appStore.dispatchToken = AppDispatcher.register( action => {
	switch(action.actionType) {
		case 'setCounter':
			_counter = action.num;
			_appStore.emitChange(); // updates view
			break;
		default:
			break;
	}
	return true;
});