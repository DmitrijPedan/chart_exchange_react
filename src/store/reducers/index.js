import {combineReducers} from 'redux';

import todayExchange from './fetchTodayReducer';
import periodExchange from './fetchPeriodReducer';
import arrayOfDates from './dateRangeReducer';
import arrayOfCurrencies from './currenciesReducer';


export default combineReducers({ 
    todayExchange: todayExchange,
    periodExchange: periodExchange,
    arrayOfDates: arrayOfDates,
    arrayOfCurrencies: arrayOfCurrencies,
});