import {SET_TODAY_DATA, SORT_TABLE} from '../constants';

const initState = [];

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_TODAY_DATA: 
            return [...payload];
        case SORT_TABLE: 
            return [...payload];
        default:
            return [...state];
    }
};

export default reducer;