import {VISIBILITY_COUNTRIES_INFO, SET_DATA_COUNTRIES_INFO} from '../constants';

const initState = {
    display: false,
    data: [],
}

const reduser = (state = initState, {type, payload}) => {
    switch (type) {
        case VISIBILITY_COUNTRIES_INFO:
            return {...state, display: !state.display, data: []};
        case SET_DATA_COUNTRIES_INFO:
            return {...state, display: true, data: payload}
        default:
            return {...state}
    }
}

export default reduser;