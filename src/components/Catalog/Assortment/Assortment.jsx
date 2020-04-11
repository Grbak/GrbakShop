import React from 'react';

import Product from './Product/Product'
import style from './Assortment.module.css'


const Assortment = (props) => {

    let pagesCount = Math.ceil(props.productsCount /props.pageSize);

    let pages =[];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesElements = pages.map(p => <div onClick={(e) => {props.onPageChanged(p); } } className={props.currentPage === p ? style.currentPage : style.page}>{p}</div>);
    let ProductsElements = props.products.map( p => <Product productId={p.productId} name={p.name} price={p.price} color={p.color} country={p.country} conf={p.conf} photo={p.photo} availability={p.availability}/>);

        return (
            <div className={style.wrapper}>
                <div className={style.menuWrapper}>
                    <div className={style.menu}></div>
                </div>
                <div>
                    <div className={style.assortment}>
                        {ProductsElements}
                    </div>
                    <div className={style.pagination}>
                        {pagesElements}
                    </div>
                </div>  
            </div>
        );
}

export default Assortment;