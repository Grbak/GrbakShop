import {connect} from 'react-redux';

import ProductPage from './ProductPage';
import {changeTab} from '../../../redux/catalogReducer';

let mapStateToProps = (state) => {
    return {
        products: state.catalogPage.products,
        pageSize: state.catalogPage.pageSize,
        currentTab: state.catalogPage.currentTab,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (flag) => {
            dispatch(changeTab(flag));
        },
    };
};

const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPageContainer;