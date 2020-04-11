import {createStore, combineReducers} from 'redux';
import catalogReducer from './catalogReducer';
import stocksReducer from './stocksReducer';
import brandsReducer from './brandsReducer';

let reducers = combineReducers({
    catalogPage: catalogReducer,
    stocksPage: stocksReducer,
    brandsPage: brandsReducer,
});

let store = createStore(reducers);

export default store;