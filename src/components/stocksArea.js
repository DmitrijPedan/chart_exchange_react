import React from 'react';
import {connect} from 'react-redux';


const StocksArea = ({ws, data}) => {
    
    const wss = new WebSocket('ws://thawing-depths-65790.herokuapp.com/stocks');
    // wss.onopen = e => console.log('connected');
    // wss.onmessage = e => console.log(e);

    console.log('ws from store: ', ws);
    console.log('new ws: ', wss);
    
    
    return (
        <div className = "toolbar-element stockElement hidden">
            <div>StockArea</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ws: state.wsConnection.ws,
    data: state.wsConnection.data,
})

export default connect(mapStateToProps)(StocksArea);