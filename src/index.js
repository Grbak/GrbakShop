import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/redux-state.js';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

};

rerenderEntireTree(store.getState());

serviceWorker.unregister();

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

