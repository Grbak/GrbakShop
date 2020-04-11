import React from 'react';
import style from './StocksItem.module.css'

const StocksItem = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={props.source}></img>
            <p> {props.description} </p>
        </div>
    );
};

export default StocksItem;