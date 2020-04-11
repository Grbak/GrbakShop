import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './Brands.module.css';

const Brands = (props) => {

   let BrandsElements = props.brands.map(b => <NavLink to={`/brands/${b.path}`} activeClassName={style.activeLink}> {b.title} </NavLink>); 

    return(
        <div className={style.wrapper}>
            <div className={style.menu}>
                {BrandsElements}
            </div>
            <div className={style.content}>
                <div>
                    <h1>Fender</h1>
                    <p>Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным</p>
                </div>
            </div>
            
        </div>
    );
};

export default Brands;