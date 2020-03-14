import {SET_CURRENCIES} from '../constants';

const initState = ['USD'];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENCIES:
            return [...action.payload];
        default:
            return [...state];
    }
};

export default reducer;