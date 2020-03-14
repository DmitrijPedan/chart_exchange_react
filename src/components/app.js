import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import fetchRestCountries from '../services/fetchRestCountries';
import {actionSetRestCountries} from '../store/actions/fetchRestCountriesAction';
import Header from './header';
import Main from './main';
import Footer from './footer';


const App = ({actionSetRestCountriesHandler}) => {
    document.title = "Exchange rates NBU";

    useEffect(() => {
        const fetchData = async () => actionSetRestCountriesHandler(await fetchRestCountries());
        fetchData();
    }, [])
    
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

const mapDispatchToProps = () => dispatch => ({
    actionSetRestCountriesHandler: (countries) => dispatch(actionSetRestCountries(countries)),
})

export default connect(null, mapDispatchToProps)(App);