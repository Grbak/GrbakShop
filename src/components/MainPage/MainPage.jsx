import React from 'react';
import style from './MainPage.module.css';

import {Route} from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Stocks from '../Stocks/Stocks';
import Services from '../Services/Services';
import Shipping from '../Shipping/Shipping';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

const MainPage = (props) => {
    return (
        <div className={style.wrapper}>
                <Route path='/mainPage' component={MainPage}/>
                <Route path='/catalog' render={ () => <Catalog state={props.state.catalogPage} changingTab={props.changingTab} addComment={props.addComment} updateNewCommentText={props.updateNewCommentText}/> }/>
                <Route path='/stocks'render={ () => <Stocks state={props.state.stocksPage}/> }/>
                <Route path='/services' component={Services}/>
                <Route path='/shipping' component={Shipping}/>
                <Route path='/contacts' component={Contacts}/>
                <Footer />
        </div>
    );
};

export default MainPage;