import React from 'react';
import style from './Header.module.css';
import MenuItem from './MenuItem/MenuItem';

const Header = () => {
    return(
        <div className={style.wrapper}>
            {/* <div className={style.topPanel}>

            </div> */}
            {/* <div className={style.logoPanel}></div> */}
            <div className={style.menu}>
                {/* <div className={style.space}></div> */}
                {/* <img src='https://i.ibb.co/0fdjxqv/logo.png'></img> */}
                <MenuItem path='/catalog' title='Каталог' />
                <MenuItem path='/brands' title='Бренды' />
                <MenuItem path='/stocks' title='Акции' />
                <MenuItem path='/services' title='Услуги' />
                <MenuItem path='/shipping' title='Доставка' />
                <MenuItem path='/contacts' title='Контакты' />
                {/* <div className={style.space}></div> */}
            </div>
        </div>
    )
};

export default Header;