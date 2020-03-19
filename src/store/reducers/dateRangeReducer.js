import {SET_DATES_RANGE} from '../constants';

const initState = [];

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_DATES_RANGE: 
            return [...payload];
        default:
            return [...state];
    }
};

export default reducer;