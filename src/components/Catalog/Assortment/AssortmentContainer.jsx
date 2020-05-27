import React from 'react';
import {connect} from 'react-redux';

import Assortment from './Assortment';
import {setCurrentPage,  setFilter, setSortDirection, setSortParameter, getProductsThunk, getBrandsThunk} from '../../../redux/catalogReducer';


class AssortmentAPIComponent extends React.Component {

    constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
    }

    componentDidMount() {
        this.props.getBrandsThunk();
        this.props.getProductsThunk(this.props.currentPage, this.props.pageSize, this.props.filter, this.props.sortParameter, this.props.sortDirection);
    }

    componentWillUnmount() {
        this.props.setCurrentPage(1);
        this.props.setFilter({ brands: []});
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getProductsThunk(pageNumber, this.props.pageSize, this.props.filter, this.props.sortParameter, this.props.sortDirection);
    }

    sort(newFilter) {
        this.props.setFilter(newFilter);
        this.props.setCurrentPage(1);
        this.props.getProductsThunk(1, this.props.pageSize, newFilter, this.props.sortParameter, this.props.sortDirection);
    }

    render() {
        return <Assortment products={this.props.catalogPage.products} 
                           productsCount={this.props.catalogPage.productsCount}
                           pageSize={this.props.catalogPage.pageSize}
                           currentPage={this.props.catalogPage.currentPage}
                           brands={this.props.catalogPage.brands}
                           onPageChanged={this.onPageChanged} 
                           sort={this.sort}
                           isFetching={this.props.isFetching}
                           sortParameter={this.props.sortParameter}
                           setSortParameter={this.props.setSortParameter}
                           sortDirection={this.props.sortDirection}
                           setSortDirection={this.props.setSortDirection}/>;
    }
};


let mapStateToProps = (state) => {
    return {
        catalogPage: state.catalogPage,
        currentPage: state.catalogPage.currentPage,
        pageSize: state.catalogPage.pageSize,
        filter: state.catalogPage.sortParams.filter,
        sortParameter: state.catalogPage.sortParams.parameter,
        sortDirection: state.catalogPage.sortParams.direction,
        isFetching: state.catalogPage.isFetching,
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

const AssortmentContainer = connect(mapStateToProps, 
    {setCurrentPage, 
    setFilter,
    setSortDirection,
    setSortParameter, 
    getProductsThunk, 
    getBrandsThunk})(AssortmentAPIComponent);

export default AssortmentContainer;