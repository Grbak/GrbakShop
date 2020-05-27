import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './Header.module.css';
import Modal from './Modal/Modal';
import delivery from '../../img/delivery.png';
import percent from '../../img/percent.png';

const Header = (props) => {

    let sections = [{title: 'Каталог', path: '/catalog'},
                    {title: 'Бренды', path: '/brands'},
                    {title: 'Услуги', path: '/services'},
                    {title: 'Доставка', path: '/shipping'},
                    {title: 'Контакты', path: '/contacts'}];

    let menuItems = sections.map( section => {
        return(
            <div className={style.item}>
                <NavLink to={section.path} activeClassName={style.activeLink}> {section.title} </NavLink>
            </div>
        )
    });

    const modal = props.showModal ? <Modal handleHide={props.handleHide}
                                           loginText={props.loginText}
                                           passwordText={props.passwordText}
                                           updateLoginText={props.updateLoginText}
                                           updatePasswordText={props.updatePasswordText}
                                           logIn={props.logIn}/> : null; 


    let auth = props.isAuth ? 
        <div className={style.auth}>
            <div className={style.authItem}>Профиль</div>
            <div className={style.authItem}>Корзина</div>
            <div className={style.authItem} onClick={() => {props.logOut();}}> Выйти </div>
        </div>  
        : 
        <div className={style.auth}>
            <div className={style.authItem}> Корзина </div>
            <div className={style.authItem} onClick={props.handleShow}> Войти </div>
        </div>;


    return(
        <div className={style.wrapper}>
            {modal}
            <div className={style.topPanel}>
                <div className={style.ex}>
                    <img src={delivery}></img>
                    Бесплатная доставка от 5000 рублей
                </div>
                <div className={style.exe}>
                    <img src={percent}></img>
                    Программа лояльности
                </div>
            </div>
            <div className={style.logoPanel}>
                <div className={style.logo}>
                    GrbakShop
                </div>
                {auth}
            </div>
            <div className={style.panel}>
                <div className={style.menu}>
                    {menuItems}
                </div>
            </div>
        </div>
    )
};

export default Header;