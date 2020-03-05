import { SET_DATES_RANGE } from "../constants";

export const actionSetDatesRange = (data) => {
    return {
        type: SET_DATES_RANGE,
        payload: data,
    }
}