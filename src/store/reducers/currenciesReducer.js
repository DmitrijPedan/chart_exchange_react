import {SET_CURRENCIES} from '../constants';

const initState = ['USD'];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENCIES:
            return state = action.payload;
        default:
            return state;
    }
};

export default reducer;