import {connect} from 'react-redux';

import Brands from './Brands';

let mapStateToProps = (state) => {
    console.log(state);
    return({
        brands: state.brandsPage.brands,
    });
};

let mapDispatchToProps = (dispatch) => {
    return({

    });
};

const BrandsContainer = connect(mapStateToProps, mapDispatchToProps)(Brands);

export default BrandsContainer;