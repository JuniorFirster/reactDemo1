import AddDispatcher from '../addDispatcher';
import * as ActionTypes from '../actionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'changed';

const CounterValues = {
    first: 10,
    second: 47,
    third: 103,
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getValues: function() {
        return CounterValues;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addEventListenerChange: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeEventListenerChange: function() {
        this.removeListener(CHANGE_EVENT,callback);
    },
});

CounterStore.dispatcherToken = AddDispatcher.register(action => {
    if (action.type === ActionTypes.INCREMENT) {
        CounterValues[action.counterCaption]++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        CounterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
});

export default CounterStore;