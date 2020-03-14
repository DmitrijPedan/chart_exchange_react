import {SET_TODAY_DATA, SORT_TABLE} from '../constants';

const initState = [];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TODAY_DATA: 
            return state = [...action.payload];
        case SORT_TABLE: 
            return [...action.payload];
        default:
            return [...state];
    }
};

export default reducer;