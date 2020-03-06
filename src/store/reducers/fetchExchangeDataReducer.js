import {SET_EXCHANGE_DATA} from '../constants';

const dataState = {
    data: [],
    loaded: false,
};

const reducer = (state = dataState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_DATA: 
            return {
                ...state, 
                data: action.payload,
                loaded: true,
            };
        default:
            return {...state};
    }
};

export default reducer;