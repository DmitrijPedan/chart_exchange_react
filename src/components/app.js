import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import fetchRestCountries from '../services/fetchRestCountries';
import {actionSetRestCountries} from '../store/actions/fetchRestCountriesAction';
import {actionSetTodayData} from '../store/actions/fetchTodayAction';
import {actionSetWSConnection} from '../store/actions/setWSConnectionAction';
import createConnectionWS from '../services/fetchStocksOnWS';
import Header from './header';
import Main from './main';
import Footer from './footer';


const App = ({setRestCountriesHandler, fetchTodayHandler, setWSConnectionHandler}) => {
    
    document.title = "Exchange rates NBU";

    useEffect(() => {
        const fetchData = async () => setRestCountriesHandler(await fetchRestCountries());
        fetchData();
        fetchTodayHandler();
        setWSConnectionHandler(createConnectionWS());
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
    setRestCountriesHandler: (countries) => dispatch(actionSetRestCountries(countries)),
    fetchTodayHandler: () => dispatch(actionSetTodayData()),
    setWSConnectionHandler: (ws) => dispatch(actionSetWSConnection(ws))
})

export default connect(null, mapDispatchToProps)(App);