import React from 'react';
import {Route} from 'react-router-dom';

import style from './MainPage.module.css';
import CatalogContainer from '../Catalog/CatalogContainer';
import StocksContainer from '../Stocks/StocksContainer';
import Services from '../Services/Services';
import Shipping from '../Shipping/Shipping';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import BrandsContainer from '../Brands/BrandsContainer';

const MainPage = (props) => {
    return (
        <div className={style.wrapper}>
                <Route path='/mainPage' component={MainPage}/>
                <Route path='/catalog' render={ () => <CatalogContainer /> }/>
                <Route path='/brands' render={ () => <BrandsContainer /> }/>
                <Route path='/stocks'render={ () => <StocksContainer /> }/>
                <Route path='/services' component={Services}/>
                <Route path='/shipping' component={Shipping}/>
                <Route path='/contacts' component={Contacts}/>
                <Footer />
        </div>
    );
};

export default MainPage;