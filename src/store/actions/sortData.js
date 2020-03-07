import {SORT_TABLE} from '../constants';

export const setSortedData = (data) => {
    return {
        type: SORT_TABLE,
        payload: data,
    }
}