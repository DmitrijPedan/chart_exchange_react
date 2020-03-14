import {SET_REST_COUNTRIES} from '../constants';

export const actionSetRestCountries = (data) => ({
    type: SET_REST_COUNTRIES,
    payload: data,
});