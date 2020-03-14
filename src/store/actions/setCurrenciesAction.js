import {SET_CURRENCIES} from '../constants';

export const setCurrencies = (data) => ({
    type: SET_CURRENCIES,
    payload: data,
});

export const actionSetCurrencies = (codes) => (dispatch) => {
    codes.length > 0 ? dispatch(setCurrencies(codes)) : dispatch(setCurrencies(["USD"]))
}