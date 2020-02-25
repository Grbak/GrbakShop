import React from 'react';
import style from "./Product.module.css"

const Product = (props) => {

    let availability;

    if (props.availability == 'available') {
    availability = () => <div>В наличии</div>; 
    } else {
        availability = () => <div className={style.props.availability}>Не в наличии</div>; 
    };

    return(
        <div className={style.wrapper}>
            <img src={props.photo}></img>
            <div className = {style.information}>
                <div className={style.titleOfProduct}> {props.name} </div>
                <div>
                    {/* <ul>
                        <li>Страна производства: {props.country}</li>
                        <li>Цвет: {props.color}</li>
                        <li>Звукосниматели: {props.conf}</li>
                    </ul> */}
                <p className={style.price}> {props.price} </p>
                </div>
                {availability}
            </div>
        </div>
    )
};

export default Product;