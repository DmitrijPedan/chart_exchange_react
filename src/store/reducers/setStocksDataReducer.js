import {SET_STOCKS_DATA} from '../constants';

const initState = {};

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_STOCKS_DATA:
            return {...payload}
        default:
            return {...state};
    }   
}

export default reducer;

