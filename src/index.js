import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/redux-state.js';
import App from './App';
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} store={store}/>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

serviceWorker.unregister();

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

