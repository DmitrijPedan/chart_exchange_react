import {SET_WS_CONNECTION, SET_STOCKS_DATA} from '../constants';

const initState = {
    ws: null,
    data: null,
};

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_WS_CONNECTION:
            return {
                ...state,
                ws: payload,
            };
        case SET_STOCKS_DATA:
            console.log('payload', payload);
            return {
                ...state,
                data: payload,
            };
        default:
            return {...state};
    }   
}

export default reducer;

