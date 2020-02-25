import React from 'react';
import style from './Catalog.module.css';
import Product from './Product/Product'


const Catalog = (props) => {

    let ProductsElements = props.state.products.map( p => <Product name={p.name} price={p.price} color={p.color} country={p.country} conf={p.conf} photo={p.photo} availability={p.availability}/>);
    let BrandsElements = props.state.brands.map(b => <div> {b} </div> );

    return(
        <div className={style.wrapper}>
                <div className={style.menu}>
                    <div className={style.assortment}>
                        {BrandsElements}
                    </div>
                </div>
                <div className={style.items}> 
                    {ProductsElements}
                </div>
        </div>
    )
};

export default Catalog;