import {VISIBILITY_COUNTRIES_INFO, SET_DATA_COUNTRIES_INFO} from '../constants';

export const setVisibilityCountriesInfo = () => ({
    type: VISIBILITY_COUNTRIES_INFO
})

export const setCountriesInfoData = (data) => ({
    type: SET_DATA_COUNTRIES_INFO,
    payload: data,
})