import rerenderEntireTree from './render.js';
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js';

rerenderEntireTree(state);

serviceWorker.unregister();
