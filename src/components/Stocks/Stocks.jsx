import React from 'react';
import style from './Stocks.module.css';
import StocksItem from './StocksItem/StocksItem'

let StocksData = [
    {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМ  afdaf ОБ АКЦИИ',},
    {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМАЦИЯ fadadf ОБ АКЦИИ',},
    {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМАЦИЯ adfadf ОБ АКЦИИ',},
    {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМАЦИЯ assadasd ОБ АКЦИИ',},
];


const Stocks = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.items}>
                <StocksItem source={StocksData[0].source} description={StocksData[0].description} />
                <StocksItem source={StocksData[1].source} description={StocksData[1].description} />
                <StocksItem source={StocksData[2].source} description={StocksData[2].description} />
                <StocksItem source={StocksData[3].source} description={StocksData[3].description} />
            </div>
        </div>
    );
};

export default Stocks;