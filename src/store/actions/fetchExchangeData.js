import { SET_EXCHANGE_DATA } from "../constants";
import fetchExchangeRangeDates from '../../services/fetchExchangeRangeDates';

const datesArray = ['20200301', '20200302', '20200303', '20200304', '20200305', '20200306'];

const setExchangeData = (data) => ({
    type: SET_EXCHANGE_DATA,
    payload: data,
});

export const actionSetExchangeData = () => (dispatch) => {
    const data = fetchExchangeRangeDates(datesArray);
    dispatch(setExchangeData(data))
}