import {connect} from 'react-redux';

import Catalog from './Catalog';
import {setProducts, setCurrentPage} from '../../redux/catalogReducer';

let mapStateToProps = (state) => {
    console.log('КАТАЛОГ ПЕРЕРИСУЕТСЯ', state.catalogPage.products);
    return {
        products: state.catalogPage.products,
    };
};

let mapDispatchToProps = (dispatch) => {
    return { 
        setProducts: (products) => {
            dispatch(setProducts(products)); 
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage));
        },
    };
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
