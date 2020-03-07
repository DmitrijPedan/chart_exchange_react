import {SET_TODAY_DATA} from '../constants';
import fetchTodayExchange from '../../services/fetchTodayExchange';

const setTodayData = (data) => ({
    type: SET_TODAY_DATA,
    payload: data,
});

export const actionSetTodayData = () => async (dispatch) => {
    dispatch(setTodayData(await fetchTodayExchange()))
}
