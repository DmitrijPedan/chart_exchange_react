import {SET_DATES_RANGE} from '../constants';

const dataState = [];

const reducer = (state = dataState, action) => {
    switch (action.type) {
        case SET_DATES_RANGE: 
            return [...new Array(Number(action.payload))];
        default:
            return state;
    }
};

export default reducer;