import React from 'react';

import style from './ProductPage.module.css';

import Description from './Description/Description';
import Characteristics from './Characteristics/Characteristics';
import ReviewsContainer from './Reviews/ReviewsContainer';

let flag = 1;

const ProductPage = (props) => {

    const CurrentTab = () => {
        switch (flag) {
            case 1:
                return(<Description currentProduct = {props.currentProduct}/>);
            case 2:
                return(<Characteristics currentProduct = {props.currentProduct}/>);
            case 3:
                return(<ReviewsContainer currentProduct = {props.currentProduct} store={props.store}/>);
        };
    };

    let getDescription = () => {
        flag = 1;
        changeTabColor(flag);
        props.changeTab();
    };

    let getCharacteristics = () => {
        flag = 2;
        changeTabColor(flag);
        props.changeTab();
    };

    let getReviews = () => {
        flag = 3;
        changeTabColor(flag);
        // debugger;
        props.changeTab();
    };


    let changeTabColor = (flag) => {

        let d = document.getElementById('description');
        let c = document.getElementById('characteristics');
        let r = document.getElementById('reviews');

        switch(flag) {
            case 1:
                d.style.backgroundColor = '#6fa8dc';
                d.style.color = 'white';
                c.style.backgroundColor = 'white';
                c.style.color = '#232323';
                r.style.backgroundColor = 'white';
                r.style.color = '#232323';
                break;
            case 2:
                d.style.backgroundColor = 'white';
                d.style.color = '#232323';
                c.style.backgroundColor = '#6fa8dc';
                c.style.color = 'white';
                r.style.backgroundColor = 'white';
                r.style.color = '#232323';
                break;
            case 3:
                d.style.backgroundColor = 'white';
                d.style.color = '#232323';
                c.style.backgroundColor = 'white';
                c.style.color = '#232323';
                r.style.backgroundColor = '#6fa8dc';
                r.style.color = 'white';
                break;
        };
    };


    return(
    <div className={style.wrapper}>
        <div className={style.imgContainer}>
            <img src={props.currentProduct.photo}></img>
        </div>
        <div className={style.information}>
            <div className={style.title}> {props.currentProduct.name} </div>
            <div className={style.menu}>
                <a id='description' onClick={getDescription}>Описание</a>
                <a id='characteristics' onClick={getCharacteristics}>Характеристики</a>
                <a id='reviews' onClick={getReviews}>Отзывы</a>
            </div>
            {CurrentTab()}

        </div>
    </div>
    );
};

export default ProductPage;