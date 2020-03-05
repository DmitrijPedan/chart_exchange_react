import { createStore, applyMiddleware, compose } from 'redux';
import { SET_DATES_RANGE } from './constants';
import thunk from 'redux-thunk';

const dataState = {
    arrayOfDates: [],
    arrayOfCurrencies: ['startData'],
    dataIsLoaded: false,
};

const reducer = (state = dataState, action) => {
    switch (action.type) {
        case SET_DATES_RANGE: 
            return {
                ...state, 
                arrayOfDates: [...new Array(Number(action.payload))]
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