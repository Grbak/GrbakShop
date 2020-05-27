import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MainPage from './components/MainPage/MainPage';



function App() {
  return (
    <div class='page'>
      <BrowserRouter>
        <HeaderContainer />
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
