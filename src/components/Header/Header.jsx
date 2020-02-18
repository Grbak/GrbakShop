import React from 'react';
import style from './Header.module.css';
import MenuItem from './MenuItem/MenuItem';

const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.topPanel}></div>
            <div className={style.menu}>
                <MenuItem path='/Catalog' title='Каталог' />
                <MenuItem path='/Stocks' title='Акции' />
                <MenuItem path='/Services' title='Услуги' />
                <MenuItem path='/Shipping' title='Доставка и оплата' />
                <MenuItem path='/Contacts' title='Контакты' />
            </div>
            <div className={style.bottomPanel}></div>
        </div>
    )
};

export default Header;