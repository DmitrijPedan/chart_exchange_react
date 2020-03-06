import { createStore, applyMiddleware, compose } from 'redux';
import { SET_DATES_RANGE, SET_EXCHANGE_DATA } from './constants';
import thunk from 'redux-thunk';

const dataState = {
    arrayOfDates: [],
    arrayOfCurrencies: [],
    dataIsLoaded: false,
};

const reducer = (state = dataState, action) => {
    switch (action.type) {
        case SET_DATES_RANGE: 
            return {
                ...state, 
                arrayOfDates: [...new Array(Number(action.payload))]
            };
        case SET_EXCHANGE_DATA: 
            return {
                ...state, 
                arrayOfCurrencies: action.payload,
                dataIsLoaded: true,
            };
        default:
            return {...state};
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
);