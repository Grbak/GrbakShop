import React from 'react';
import style from './Header.module.css';
import MenuItem from './MenuItem/MenuItem';

const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.topPanel}>

            </div>
            <div className={style.logoPanel}></div>
            <div className={style.menu}>
                <MenuItem path='/catalog' title='Каталог' />
                <MenuItem path='/stocks' title='Акции' />
                <MenuItem path='/services' title='Услуги' />
                <MenuItem path='/shipping' title='Доставка' />
                <MenuItem path='/contacts' title='Контакты' />
            </div>
        </div>
    )
};

export default Header;