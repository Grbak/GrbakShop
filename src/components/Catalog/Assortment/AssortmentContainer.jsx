import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

import Assortment from './Assortment';
import {setProducts, setCurrentPage, setProductsCount} from '../../../redux/catalogReducer';


class AssortmentAPIComponent extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://127.0.0.1:8000/products?page=${pageNumber}&count=${this.props.catalogPage.pageSize}`)
            .then(response => {
                this.props.setProducts(response.data.products);
        });
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/products?page=${this.props.catalogPage.currentPage}&count=${this.props.catalogPage.pageSize}`)
        .then(response => {
        this.props.setProducts(response.data.products);
        this.props.setProductsCount(response.data.productsCount);
        });
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
        // this.props.setProducts([]);
    }

    render() {
        return <Assortment products={this.props.catalogPage.products} 
                           productsCount={this.props.catalogPage.productsCount}
                           pageSize={this.props.catalogPage.pageSize}
                           currentPage={this.props.catalogPage.currentPage}
                           onPageChanged={this.onPageChanged} />;

    }
};



let mapStateToProps = (state) => {
    return {
        catalogPage: state.catalogPage,
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return { 
//         setProducts: (products) => {
//             dispatch(setProductsActionCreator(products)); 
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage));
//         },
//         setProductsCount: (count) => {
//             dispatch(setProductsCountActionCreator(count));
//         },
//     };
// };

const AssortmentContainer = connect(mapStateToProps, {setProducts, setCurrentPage, setProductsCount})(AssortmentAPIComponent);

export default AssortmentContainer;