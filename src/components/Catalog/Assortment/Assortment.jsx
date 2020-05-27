import React from 'react';

import Product from './Product/Product';
import style from './Assortment.module.css';
import fender from '../../../img/fender.png';
import tele from '../../../img/tele.jpg';
import preloader from '../../../img/5.gif';


const Assortment = (props) => {
    let sales = [{title: 'Скидка 10%', description: 'на все стратокастеры', image: fender},
                 {title:'Скидка 20%', description: 'на замену колков у телекастеров', image: tele},
                 {title: 'Скидки до 20%', description: 'на все стратокастеры', image: fender}];

    let salesItems = sales.map(sale => {
        return(
            <div className={style.wrapperSale}>
                <img src={sale.image}></img>
                <div className={style.titleSale}>
                    {sale.title}
                </div>
                <div className={style.descriptionSale}>
                    {sale.description}
                </div>
            </div>
        );
    });

    let brandsElements = props.brands.map(b => {
        return(
            <div className={style.item}> 
                <input type='checkbox' className={style.customCheckbox} name='brand' value={b} id={b}/>
                <label className={style.checkboxLabel} for={b}>{b}</label>
            </div>);
    });


    let accept = () => {
        let brands = [];
        let checkbox = document.getElementsByName('brand');
        for (let i = 0; i < checkbox.length; i++) {
              if(checkbox[i].checked) {
                brands.push(checkbox[i].value);
            }
        }

        props.sort({
            brands,  
        });
    };

    let handleChangeSortDirection = (event) => {
        props.setSortDirection(event.target.value);
    };

    let handleChangeSortParameter = (event) => {
        props.setSortParameter(event.target.value);
    };

    let pagesCount = Math.ceil(props.productsCount /props.pageSize);

    let pages =[];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesElements = pages.map(p => <div onClick={(e) => {props.onPageChanged(p); } } className={props.currentPage === p ? style.currentPage : style.page}>{p}</div>);
    let ProductsElements = props.products.map( p => <Product productId={p.productId} name={p.name} kind={p.kind} price={p.price} color={p.color} country={p.country} conf={p.conf} photo={p.photo} availability={p.availability}/>);

    let assortment = props.isFetching ?
        <div className={style.preloaderContainer}>
            <div>
                <img src={preloader}/> 
            </div>
        </div>
        :
        <>
            <div className={style.assortment}>
                {ProductsElements}
            </div>
            <div className={style.paginationContainer}>
                <div className={style.pagination}>
                    {pagesElements}
                </div>
            </div>
        </>  

    return (
        <div className={style.wrapper}>
            <div className={style.sales}>
                <div className={style.saleTitle}></div>
                <div className={style.salesItemsContainer}>
                  {/* {salesItems} */}
                </div>
            </div>
            <div className={style.catalogWrapper}>
                <div className={style.menuWrapper}>
                    <div className={style.menu}>
                        <div className={style.section}>
                            <div className={style.sectionTitle}>Бренды</div>
                            {brandsElements}
                        </div>
                        <button className={style.acceptButton} onClick={accept}>Применить</button>
                    </div>
                </div>
                <div className={style.assortmentWrapper}>
                    <div className={style.sortPanel}>
                        <div className={style.selectContainer}>
                            <select className={style.select} value={props.sortParameter} name='sort' onChange={handleChangeSortParameter}>
                                <option value='views'>По популярности</option>
                                <option value='price'>По цене</option>
                            </select>
                        </div>
                        <div className={style.selectContainer}>
                            <select className={style.select} value={props.sortDirection} name='sort' onChange={handleChangeSortDirection}>
                                <option value={1}>По возрастанию</option>
                                <option value={-1}>По убыванию</option>
                            </select>
                        </div>
                        {/* <div className={style.radioContainer}>
                                <div className={style.radio}>
                                    <input className={style.radio_input} name="car" type="radio" id="honda"/>
                                    <label className={style.radio_label} for="honda">s</label>
                                </div>
                                <div className={style.radio}>
                                    <input className={style.radio_input} name="car" type="radio" id="renault"/>
                                    <label className={style.radio_label} for="renault">s</label>
                                </div>
                        </div> */}
                    </div>
                    {assortment}
                </div>
            </div>
        </div>
    );
}

export default Assortment;