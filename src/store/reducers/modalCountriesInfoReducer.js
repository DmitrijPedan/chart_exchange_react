import {SET_DISPLAY_COUNTRIES_MODAL, SET_DATA_COUNTRIES_MODAL} from '../constants';

const initState = {
    display: false,
    data: [],
}

const reduser = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_DISPLAY_COUNTRIES_MODAL:
            return {
                ...state,
                display: !state.display,
                data: [],
            }
        case SET_DATA_COUNTRIES_MODAL:
            return {
                ...state,
                display: true,
                data: payload,
            }
        default:
            return {...state}
    }
}

export default reduser;