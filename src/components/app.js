import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import fetchRestCountries from '../services/fetchRestCountries';
import {actionSetRestCountries} from '../store/actions/fetchRestCountriesAction';
import {actionSetTodayData} from '../store/actions/fetchTodayAction';
import {actionSetStocksData} from '../store/actions/setStocksDataAction';
import { URL_WS_STOCKS } from '../config/urlConstants';
import Header from './header';
import Main from './main';
import Footer from './footer';


const App = ({fetchCountriesData, fetchTodayData, setStocksData}) => {
    
    document.title = "Exchange rates NBU";

    useEffect(() => {
        const fetchCountries = async () => fetchCountriesData(await fetchRestCountries());
        fetchCountries();
        fetchTodayData();
        const ws = new WebSocket(URL_WS_STOCKS);
        ws.onmessage = event => setStocksData(JSON.parse(event.data));
    })
    
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

const mapDispatchToProps = () => dispatch => ({
    fetchCountriesData: (countries) => dispatch(actionSetRestCountries(countries)),
    fetchTodayData: () => dispatch(actionSetTodayData()),
    setStocksData: (ws) => dispatch(actionSetStocksData(ws))
})

export default connect(null, mapDispatchToProps)(App);