import React from 'react';

import style from './Description.module.css';

const Description = (props) => {

    return(
        <div className={style.wrapper}>
            {props.currentProduct.description}
        </div>
    )
};

export default Description;