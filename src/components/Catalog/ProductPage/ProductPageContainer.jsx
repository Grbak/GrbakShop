import React from 'react';

import ProductPage from './ProductPage';

import { changeTabActionCreator } from '../../../redux/catalogReducer';

const ProductPageContainer = (props) => {

    let currentProduct = props.store.getState().catalogPage.products.find( p => { if(p.productId == props.productId) return true});

    let changeTab = () => {
        props.store.dispatch(changeTabActionCreator());
    };

    return(<ProductPage store={props.store} changeTab={changeTab} currentProduct={currentProduct}/>);
};

export default ProductPageContainer;