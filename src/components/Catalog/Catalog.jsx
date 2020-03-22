import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './Catalog.module.css';
import Assortment  from './Assortment/Assortment';
import ProductPageContainer from './ProductPage/ProductPageContainer';


const Catalog = (props) => {
    
    let BrandsElements = props.store.getState().catalogPage.brands.map(b => <div> {b} </div> );
    let ProductsRoutes = props.store.getState().catalogPage.products.map(p => ( <Route exact path={`/product/${p.productId}`} render={ () => <ProductPageContainer productId={p.productId} store={props.store}/>  } />));

    return(
        <div className={style.wrapper}>
                <div className={style.menu}>
                    <div className={style.title}>Бренды</div>
                    <div className={style.assortment}>
                        {BrandsElements}
                    </div>
                </div>
                <BrowserRouter>
                    <Route exact path='/catalog' render={ () => <Assortment state={props.store.getState().catalogPage.products}/>} />
                    { ProductsRoutes }
                </BrowserRouter>
        </div>
    )
};

export default Catalog;