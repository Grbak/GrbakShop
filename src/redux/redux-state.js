import {createStore, combineReducers} from 'redux';
import catalogReducer from './catalogReducer';
import stocksReducer from './stocksReducer';

let reducers = combineReducers({
    catalogPage: catalogReducer,
    stocksPage: stocksReducer,
});

let store = createStore(reducers);

export default store;