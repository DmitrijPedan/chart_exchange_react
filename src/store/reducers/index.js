import {combineReducers} from 'redux';

import toolbar from './toolbarReducer';
import arrayOfDates from './dateRangeReducer';
import arrayOfCurrencies from './currenciesReducer';
import periodExchange from './fetchPeriodReducer';
import todayExchange from './fetchTodayReducer';
import arrayOfRestCountries from './restCountriesReducer';
import modalCountriesInfo from './countriesInfoReducer';

export default combineReducers({ 
    toolbar,
    arrayOfDates,
    arrayOfCurrencies,
    periodExchange,
    todayExchange,
    arrayOfRestCountries,
    modalCountriesInfo,
});