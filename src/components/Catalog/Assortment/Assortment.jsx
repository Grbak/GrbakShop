import React from 'react';
import Product from './Product/Product'
import style from './Assortment.module.css'

const Assortment = (props) => {

    let ProductsElements = props.state.map( p => <Product productId={p.productId} name={p.name} price={p.price} color={p.color} country={p.country} conf={p.conf} photo={p.photo} availability={p.availability}/>);
    
    return (
        <div className={style.wrapper}>
            {ProductsElements}
        </div>
    );
};

export default Assortment;