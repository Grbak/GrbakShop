import React from 'react';
import style from "./Product.module.css"

const Product = (props) => {
    return(
        <div className={style.wrapper}>
            <img src={props.photo}></img>
            <div className = {style.information}>
                <h3> {props.name} </h3>
                <div>
                    <ul>
                        <li>Страна производства: {props.country}</li>
                        <li>Цвет: {props.color}</li>
                        <li>Звукосниматели: {props.conf}</li>
                    </ul>
                <p className={style.price}> {props.price} </p>
                </div>
            </div>
        </div>
    )
};

export default Product;