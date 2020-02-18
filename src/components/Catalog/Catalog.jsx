import React from 'react';
import style from './Catalog.module.css';
import Product from './Product/Product'


const Catalog = (props) => {

    // let products = [
    //     {name: 'Fender Player Stratocaster Fender Plus Top ACB MN', price: '$ 3 100 000,00', color: 'Красный', country:'США', conf: 'SSS', photo: 'https://www.guitarrasybaterias.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/0/1/0144552531_gtr_frt_001_rr_1.png',},
    //     {name: 'Fender Player Stratocaster', price: '$ 599,99', color: 'Белый', country:'США', conf: 'HSS', photo: 'https://cdn.webshopapp.com/shops/214622/files/284563530/image.jpg',},
    //     {name: 'Fender Classic Player Baja Telecaster', price: '$ 799,99', color: 'Древесный', country:'США', conf: 'SS', photo: 'https://images.squarespace-cdn.com/content/v1/55873fffe4b0e842044c4c9a/1511384217165-3UYL50YJPF2MKDFEZCK6/ke17ZwdGBToddI8pDm48kJO6xy8wDQkaz2MIP3siPCQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2c46FJLhiTTH3_jCoYXbHcTG_DlxqfH_M4s5wMQj4_XwKMshLAGzx4R3EDFOm1kBS/Fender+Classic+Player+Baja+Telecaster+FRONT.png',},
    //     {name: 'Fender Player Left Handed Telecaster', price: '$ 919,00', color: 'Черный', country:'США', conf:'SS', photo: 'https://www.musoscorner.com.au/media/catalog/product/0/1/0145222506_gtr_frt_001_rl.png',},
    //     {name: 'Fender Vintera 50s Telecaster ', price: '$ 899,99', color: 'Красный', country:'США', conf: 'SS', photo: 'https://www.swingcitymusic.com/wp-content/uploads/2019/09/0149852340_gtr_frt_001_rr.png',},
    //     // {name: '', price: '', color: '', country:'США', photo: '',},
    // ];
    
    let ProductsElements = props.products.map( p => <Product name={p.name} price={p.price} color={p.color} country={p.country} conf={p.conf} photo={p.photo}/>);

    // let brands = ['Fender', 'Gibson', 'Ibanez', 'Epiphone', 'Jackson', 'ESP', 'B.C.Rich', 'Cort',];

    let BrandsElements = props.brands.map(b => <div> {b} </div> );

    return(
        <div className={style.wrapper}>
                <div className={style.menu}>
                    <div className={style.assortment}>
                        {BrandsElements}
                    </div>
                </div>
                <div className={style.items}> 
                    {ProductsElements}
                    <div className={style.pages}>
                        <a>1</a>
                        <a>2</a>
                        <a>...</a>
                        <a>5</a>
                    </div>
                </div>
        </div>
    )
};

export default Catalog;