import { SET_EXCHANGE_DATA } from "../constants";
import {store} from '../createStore';
import fetchExchangeRangeDates from '../../services/fetchExchangeRangeDates';

const setExchangeData = (data) => ({
    type: SET_EXCHANGE_DATA,
    payload: data,
});

export const actionSetExchangeData = () => async dispatch => {
    (async () => {
        const data = await fetchExchangeRangeDates(store.getState().arrayOfDates);
        dispatch(setExchangeData(data))
    })()
};