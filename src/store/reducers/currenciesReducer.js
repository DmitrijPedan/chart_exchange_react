import {SET_CURRENCIES} from '../constants';

const initState = ['USD'];

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_CURRENCIES:
            return [...payload];
        default:
            return [...state];
    }
};

export default reducer;