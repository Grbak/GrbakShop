import React from 'react';

import style from './Characteristics.module.css';

const Characteristics = (props) => {
    return(
        <div className={style.wrapper}>
            <ul>
                <li>Цвет: {props.currentProduct.color}</li>
                <li>Страна: {props.currentProduct.country}</li>
                <li>Звукосниматели: {props.currentProduct.conf}</li>
            </ul>
        </div>
    )
};

export default Characteristics;