import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {actionSetStocksData} from '../store/actions/setStocksDataAction';
import {URL_WS_STOCKS} from '../config/urlConstants';


const StocksArea = ({setStocksData}) => {
    
    useEffect(() => {
        const wss = new WebSocket(URL_WS_STOCKS);
        wss.onmessage = event => setStocksData(JSON.parse(event.data));
    })

    return (
        <div>StockArea</div>
    )
}

const mapDispatchToProps = () => dispatch => ({
    setStocksData: (ws) => dispatch(actionSetStocksData(ws))
})

export default connect(null, mapDispatchToProps)(StocksArea);

