import {SET_DATES_RANGE} from '../constants';

const initState = [];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DATES_RANGE: 
            return [...action.payload];
        default:
            return [...state];
    }
};

export default reducer;