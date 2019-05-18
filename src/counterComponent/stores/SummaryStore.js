// import Action from '../action';
import * as ActionTypes from '../actionTypes';
import AddDispatcher from '../addDispatcher';
import CounterStore from './CounterStore';
import { EventEmitter } from 'events';

const EVENT_CHANGE = 'changed';

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummaryValues(){
        return Object
                .values(CounterStore.getValues())
                .reduce((total, num) => (total + num));
    },
    addEventListenerChange(callback) {
        this.on(EVENT_CHANGE,callback)
    },
    emitChange() {
        this.emit(EVENT_CHANGE);
    },
    removeEventListenerChange(callback) {
        this.removeListener(EVENT_CHANGE,callback);
    },
});

SummaryStore.dispatcherToken = AddDispatcher.register( action => {
    if (action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT ) {
        AddDispatcher.waitFor([CounterStore.dispatcherToken]);
        SummaryStore.emitChange();
    }
});

export default SummaryStore;
