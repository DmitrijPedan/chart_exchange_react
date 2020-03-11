import {SET_CURRENCIES} from '../constants';

export const actionSetCurrencies = (data) => ({
    type: SET_CURRENCIES,
    payload: data,
});