import {SET_WS_CONNECTION} from '../constants';

const initState = null;

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_WS_CONNECTION:
            console.log('payload', payload);
            return {...payload};
        default:
            return {...state};
    }
}

export default reducer;