import React from 'react';
import style from './MenuItem.module.css';
import {NavLink} from 'react-router-dom';

const MenuItem = (props) => {
    return (
        <div className={style.item}>
            <NavLink to={props.path} activeClassName={style.activeLink}> {props.title} </NavLink>
        </div>
    );
};

export default MenuItem;