import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import checkLists from '../state/checkLists/reducer';

const reducer = combineReducers({
    checkLists,
});

export default (initialState) => createStore(reducer, {...initialState}, applyMiddleware(thunk));
