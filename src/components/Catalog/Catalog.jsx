import React from 'react';
import {Switch, Route} from 'react-router-dom';
import style from './Catalog.module.css';
import AssortmentContainer  from './Assortment/AssortmentContainer';
import ProductPageContainer from './ProductPage/ProductPageContainer';

const Catalog = (props) => {
    
    let ProductsRoutes = props.products.map(p => ( <Route path={`/catalog/${p.productId}`} render={() => <ProductPageContainer productId={p.productId} />} />));

    console.log(ProductsRoutes);

    return(
        <div className={style.wrapper}>
                <Switch>
                    <Route exact path='/catalog' render={() => <AssortmentContainer />} />
                    { ProductsRoutes }
                </Switch>
        </div>
    )
};

// class Catalog extends React.Component {

//     constructor(props) {
//         super(props);
//         this.ProductsRoutes = props.catalogPage.products.map(p => ( <Route path={`/catalog/${p.productId}`} render={() => <ProductPageContainer productId={p.productId} />} />));
//         axios.get('http://127.0.0.1:8000/products')
//             .then(response => {
//                 // console.log(response);
//                 this.props.setProducts(response.data);
//             });
//         console.log('OK');
//     }

//     render() {
//         return(
//             <div className={style.wrapper}>
//                     <Switch>
//                         <Route exact path='/catalog' render={ () => <Assortment state={this.props.catalogPage.products}/>} />
//                         {this.ProductsRoutes}
//                     </Switch>
//             </div>
//         )
//     }
// }

export default Catalog;