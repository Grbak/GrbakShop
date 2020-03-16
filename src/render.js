import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {changingTab, addComment, updateNewCommentText} from './redux/state.js';
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} changingTab={changingTab} addComment={addComment} updateNewCommentText={updateNewCommentText}/>, document.getElementById('root'));
};

export default rerenderEntireTree;