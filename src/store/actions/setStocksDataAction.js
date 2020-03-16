import {SET_STOCKS_DATA} from '../constants';

export const actionSetStocksData = (data) => ({
    type: SET_STOCKS_DATA,
    payload: data,
})