import React from 'react';

import style from './ProductPage.module.css';

import Description from './Description/Description';
import Characteristics from './Characteristics/Characteristics';
import ReviewsContainer from './Reviews/ReviewsContainer';


const ProductPage = (props) => {

    let currentProduct = props.products[(props.productId - 1) % props.pageSize];

    // let currentProduct = props.products.find(p => {if(p.productId === props.productId) {return p}});

    const CurrentTab = () => {
        switch (props.currentTab) {
            case 1:
                return(<Description currentProduct = {currentProduct}/>);
            case 2:
                return(<Characteristics currentProduct = {currentProduct}/>);
            case 3:
                return(<ReviewsContainer currentProduct = {currentProduct}/>);
        };
    };

    let getDescription = () => {
        let flag = 1;
        props.changeTab(flag);
    };

    let getCharacteristics = () => {
        let flag = 2;
        props.changeTab(flag);
    };

    let getReviews = () => {
        let flag = 3;
        props.changeTab(flag);
    };

    return(
    <div className={style.wrapper}>
        <div className={style.imgContainer}>
            <img src={currentProduct.photo}></img>
        </div>
        <div className={style.information}>
            <div className={style.title}> {currentProduct.name} </div>
            <div className={style.menu}>
                <a id='description' onClick={getDescription} className={props.currentTab === 1 ? style.currentTab : style.tab}>Описание</a>
                <a id='characteristics' onClick={getCharacteristics} className={props.currentTab === 2 ? style.currentTab : style.tab}>Характеристики</a>
                <a id='reviews' onClick={getReviews} className={props.currentTab === 3 ? style.currentTab : style.tab}>Отзывы</a>
            </div>
            {CurrentTab()}

        </div>
    </div>
    );
};

// class ProductPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.currentProduct = props.products[props.productId - 1];
//     }

//     CurrentTab() {
//         switch (this.props.currentTab) {
//             case 1:
//                 return(<Description currentProduct = {this.currentProduct}/>);
//             case 2:
//                 return(<Characteristics currentProduct = {this.currentProduct}/>);
//             case 3:
//                 return(<ReviewsContainer currentProduct = {this.currentProduct}/>);
//         };
//     }

//     getDescription() {
//         let flag = 1;
//         this.props.changeTab(flag);
//     }

//     getCharacteristics() {
//         let flag = 2;
//         this.props.changeTab(flag);
//     }

//     getReviews() {
//         let flag = 3;
//         this.props.changeTab(flag);
//     }

//     render() {
//         return(
//             <div className={style.wrapper}>
//             <div className={style.imgContainer}>
//                 <img src={this.currentProduct.photo}></img>
//             </div>
//             <div className={style.information}>
//                 <div className={style.title}> {this.currentProduct.name} </div>
//                 <div className={style.menu}>
//                     <a id='description' onClick={this.getDescription.bind(this)} className={this.props.currentTab === 1 ? style.currentTab : style.tab}>Описание</a>
//                     <a id='characteristics' onClick={this.getCharacteristics.bind(this)} className={this.props.currentTab === 2 ? style.currentTab : style.tab}>Характеристики</a>
//                     <a id='reviews' onClick={this.getReviews.bind(this)} className={this.props.currentTab === 3 ? style.currentTab : style.tab}>Отзывы</a>
//                 </div>
//                 {this.CurrentTab()}
    
//             </div>
//         </div>
//         );
//     }
// };

export default ProductPage;