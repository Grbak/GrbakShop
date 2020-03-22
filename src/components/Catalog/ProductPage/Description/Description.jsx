import React from 'react';

import style from './Description.module.css';

const Description = (props) => {

    let paragraphs = props.currentProduct.description.map(p => <p> {p} </p>)

    return(
        <div className={style.wrapper}>
            {paragraphs}
        </div>
    )
};

export default Description;