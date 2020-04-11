import React from 'react';
import style from './Stocks.module.css';
import StocksItem from './StocksItem/StocksItem'


const Stocks = (props) => {

    let StocksElements = props.stocksData.map(s => <StocksItem source={s.source} description={s.description} />);

    return (
        <div className={style.wrapper}>
            <div className={style.items}>
                {StocksElements}
            </div>
        </div>
    );
};

export default Stocks;