import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './Catalog.module.css';
import Assortment  from './Assortment/Assortment';
import ProductPage from './ProductPage/ProductPage';


const Catalog = (props) => {

    let BrandsElements = props.state.brands.map(b => <div> {b} </div> );
    let ProductsRoutes = props.state.products.map(p => ( <Route exact path={`/product/${p.productId}`} render={ () => <ProductPage productId={p.productId} state={props.state.products} newCommentText={props.state.newCommentText} changingTab={props.changingTab} addComment={props.addComment} updateNewCommentText={props.updateNewCommentText}/>  } />));

    return(
        <div className={style.wrapper}>
                <div className={style.menu}>
                    <div className={style.title}>Бренды</div>
                    <div className={style.assortment}>
                        {BrandsElements}
                    </div>
                </div>
                <BrowserRouter>
                    <Route exact path='/catalog' render={ () => <Assortment state={props.state.products}/>} />
                    { ProductsRoutes }
                </BrowserRouter>
        </div>
    )
};

export default Catalog;