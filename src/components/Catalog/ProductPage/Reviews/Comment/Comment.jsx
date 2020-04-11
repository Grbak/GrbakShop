import React from 'react';
import moment from 'moment';

import style from './Comment.module.css';

const Comment = (props) => {

    let userName = 'Гость';

    let time = moment(props.time);

    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.userName}>{userName}</div>
                <div className={style.date}>{time.format('l')}</div>
            </div>
            <div className={style.text}>
                {props.text}
            </div>
        </div>
    )
};

export default Comment;