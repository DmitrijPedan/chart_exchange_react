import { createStore } from 'redux';
import { SET_DATES_RANGE } from './constants';

const dataState = {
    arrayOfDates: [],
    arrayOfCurrencies: ['startData']
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

export const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );