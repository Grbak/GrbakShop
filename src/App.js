import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';



function App() {
  return (
    <div class='page'>
      <BrowserRouter>
        <Header />
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
