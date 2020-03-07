import {combineReducers} from 'redux';

import arrayOfCurrencies from './fetchExchangeDataReducer';
import arrayOfDates from './dateRangeReducer';

export default combineReducers({ 
    arrayOfCurrencies,
    arrayOfDates,
});