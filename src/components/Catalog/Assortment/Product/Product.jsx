import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './Product.module.css';

const Product = (props) => {

    let path = `catalog/${props.productId}`;

    return(        
        <div className={style.wrapper}>
            <NavLink to={path}>
                <div className={style.imgContainer}>
                    <img src={props.photo}></img>
                </div>
                <div className = {style.information}>
                    <div className={style.titleOfProduct}> {props.name} </div>
                    <div>
                        <div className={style.priceAndCart}> 
                            <div className={style.price}>{props.price}</div>
                            {/* <div className={style.cart}>
                                В корзину
                            </div>  */}
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
};

export default Product;