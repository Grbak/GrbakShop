import {createStore, combineReducers, applyMiddleware} from 'redux';
import catalogReducer from './catalogReducer';
import brandsReducer from './brandsReducer';
import authReducer from './authReducer';
import ReduxThunk from 'redux-thunk';

let reducers = combineReducers({
    catalogPage: catalogReducer,
    brandsPage: brandsReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;