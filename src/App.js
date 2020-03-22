import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';


function App(props) {
  return (
    <div class='page'>
      <BrowserRouter>
        <Header />
        <MainPage state={props.state} store={props.store}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
