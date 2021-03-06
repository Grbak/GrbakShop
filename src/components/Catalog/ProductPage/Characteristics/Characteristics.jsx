import React from 'react';

import style from './Characteristics.module.css';

const Characteristics = (props) => {
    return(
        <div className={style.wrapper}>
            <ul>
                <li><span>Цвет: </span>{props.currentProduct.color}</li>
                <li><span>Страна: </span>{props.currentProduct.country}</li>
                <li><span>Звукосниматели: </span>{props.currentProduct.conf}</li>
                <li><span>Тип: </span>{props.currentProduct.type}</li>
                <li><span>Материал корпуса: </span>{props.currentProduct.bodyMaterial}</li>
                <li><span>Материал грифа: </span>{props.currentProduct.neckMaterial}</li>
                <li><span>Крепление грифа: </span>{props.currentProduct.neckConstruction}</li>
                <li><span>Накладка: </span>{props.currentProduct.fingerboard}</li>
                <li><span>Количество ладов: </span>{props.currentProduct.fretsNumber}</li>
                <li><span>Количество струн: </span>{props.currentProduct.stringsNumber}</li>
                <li><span>Ориентация: </span>{props.currentProduct.orientation}</li>
            </ul>
        </div>
    )
};

export default Characteristics;