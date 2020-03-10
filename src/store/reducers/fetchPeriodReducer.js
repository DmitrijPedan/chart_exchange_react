import {SET_EXCHANGE_DATA} from '../constants';

const initState = [];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_EXCHANGE_DATA:            
            return state = action.payload;
        default:
            return state;
    }
};

export default reducer;