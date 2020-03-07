import {SET_EXCHANGE_DATA, SET_TODAY_DATA} from '../constants';

const dataState = {
    period: [],
    today: [],
    loaded: false,
};

const reducer = (state = dataState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_DATA: 
            return {
                ...state, 
                period: action.payload,
                loaded: true,
            };
        case SET_TODAY_DATA: 
            return {
                ...state, 
                today: action.payload,
                loaded: true,
            };
        default:
            return {...state};
    }
};

export default reducer;