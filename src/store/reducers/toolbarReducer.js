import {TOOLBAR_SHOW_CHART, TOOLBAR_SHOW_TABLE, TOOLBAR_SHOW_STOCKS} from '../constants';

const initState = {
    toolbarChart: false,
    toolbarTable: false,
    toolbarStocks: false,
}

const reduser = (state = initState, {type}) => {
    switch (type) {
        case TOOLBAR_SHOW_CHART:
            return {...initState, toolbarChart: true};
        case TOOLBAR_SHOW_TABLE:
            return {...initState, toolbarTable: true};
        case TOOLBAR_SHOW_STOCKS:
            return {...initState, toolbarStocks: true};
        default:
            return {...state};
    }
}

export default reduser;