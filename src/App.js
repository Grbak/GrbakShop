import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter, Route} from 'react-router-dom';
import Stocks from './components/Stocks/Stocks';
import Services from './components/Services/Services';
import Shipping from './components/Shipping/Shipping';
import Contacts from './components/Contacts/Contacts';

function App(props) {
  return (
  <BrowserRouter>
    <div class='page'>
      <Header />
       <Route path='/MainPage' component={MainPage}/>
       <Route path='/Catalog' render={ () => <Catalog state={props.state.catalogPage}/> }/>
       <Route path='/Stocks'render={ () => <Stocks state={props.state.stocksPage}/> }/>
       <Route path='/Services' component={Services}/>
       <Route path='/Shipping' component={Shipping}/>
       <Route path='/Contacts' component={Contacts}/>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
