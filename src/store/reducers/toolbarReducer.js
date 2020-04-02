import {TOOLBAR_SHOW_CHART, TOOLBAR_SHOW_TABLE} from '../constants';

const initState = {
    toolbarChart: false,
    toolbarTable: false,
}

const reduser = (state = initState, {type}) => {
    switch (type) {
        case TOOLBAR_SHOW_CHART:
            return {...initState, toolbarChart: true};
        case TOOLBAR_SHOW_TABLE:
            return {...initState, toolbarTable: true};
        default:
            return {...state};
    }
}

export default reduser;