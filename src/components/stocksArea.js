import React from 'react';
import {connect} from 'react-redux';


const StocksArea = ({stocks}) => {
    
    // console.log(stocks);

    return (
        <div className = "toolbar-element stockElement hidden">
            <div>StockArea</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stocks: state.stocksData,
})

export default connect(mapStateToProps)(StocksArea);
