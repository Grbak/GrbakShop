import React from 'react';

import style from './ProductPage.module.css';

import Description from './Description/Description';
import Characteristics from './Characteristics/Characteristics';
import Reviews from './Reviews/Reviews';

let flag;

const ProductPage = (props) => {

    let currentProduct = props.state.find( p => { if(p.productId == props.productId) return true});

    const CurrentTab = () => {
        switch (flag) {
            case 1:
                return(<Description currentProduct = {currentProduct}/>);
            case 2:
                return(<Characteristics currentProduct = {currentProduct}/>);
            case 3:
                return(<Reviews currentProduct = {currentProduct} newCommentText={props.newCommentText} addComment={props.addComment} updateNewCommentText={props.updateNewCommentText}/>);
            default:
                return(<Description currentProduct = {currentProduct}/>);
        };
    };

    let getDescription = function() {
        flag = 1;
        props.changingTab();
    };

    let getCharacteristics = function() {
        flag = 2;
        props.changingTab();
    };

    let getReviews = function() {
        flag = 3;
        props.changingTab();
    };

    return(
    <div className={style.wrapper}>
        <div className={style.imgContainer}>
            <img src={currentProduct.photo}></img>
        </div>
        <div className={style.information}>
            <div className={style.title}> {currentProduct.name} </div>
            <div className={style.menu}>
                <a onClick={getDescription}>Описание</a>
                <a onClick={getCharacteristics}>Характеристики</a>
                <a onClick={getReviews}>Отзывы</a>
            </div>
            {CurrentTab()}

        </div>
    </div>
    );
};

export default ProductPage;