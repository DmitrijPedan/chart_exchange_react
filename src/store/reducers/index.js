import {combineReducers} from 'redux';

import todayExchange from './fetchTodayReducer';
import periodExchange from './fetchPeriodReducer';
import arrayOfDates from './dateRangeReducer';


export default combineReducers({ 
    todayExchange: todayExchange,
    periodExchange: periodExchange,
    arrayOfDates: arrayOfDates,
});