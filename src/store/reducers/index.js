import {combineReducers} from 'redux';

import todayExchange from './fetchTodayReducer';
import periodExchange from './fetchPeriodReducer';
import arrayOfDates from './dateRangeReducer';
import arrayOfCurrencies from './currenciesReducer';
import arrayOfRestCountries from './restCountriesReducer';
import modalCountriesInfo from './modalCountriesInfoReducer';
import wsConnection from './setWSConnectionReducer';

export default combineReducers({ 
    todayExchange: todayExchange,
    periodExchange: periodExchange,
    arrayOfDates: arrayOfDates,
    arrayOfCurrencies: arrayOfCurrencies,
    arrayOfRestCountries: arrayOfRestCountries,
    modalCountriesInfo: modalCountriesInfo,
    wsConnection: wsConnection,
});