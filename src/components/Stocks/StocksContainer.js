import {connect} from 'react-redux';

import Stocks from './Stocks';

let mapStateToProps = (state) => {
    console.log('state', state.stocksData);
    return {
        stocksData: state.stocksPage.stocksData,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {};
};

const StocksContainer = connect(mapStateToProps, mapDispatchToProps)(Stocks);

export default StocksContainer;