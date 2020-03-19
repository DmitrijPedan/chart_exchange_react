import {SET_REST_COUNTRIES} from '../constants';

const initState = [];

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_REST_COUNTRIES:
            return [...payload];
        default:
            return [...state];
    }
}

export default reducer;